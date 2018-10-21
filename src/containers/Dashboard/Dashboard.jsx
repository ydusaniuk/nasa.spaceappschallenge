import React from 'react';
import { connect } from 'react-redux';

import styles from './Dashboard.module.sass';

import spaceportActions from '../../store/actions/spaceport.actions';

import Globe from '../../components/Globe/Globe';
import SpaceportPanel from '../../components/SpaceportPanel/SpaceportPanel';

class Dashboard extends React.Component {
  // Not sure if Ref creation was the better choice
  // but 100% the fastest :)
  globe = React.createRef();
  state = {
    selectedSpaceport: null,
  };

  componentDidMount() {
    this.props.onLoadSpaceports();

    if (this.props.activeSpaceport) {
      this.setState({
        selectedSpaceport: this.props.activeSpaceport,
      });
    }
  }

  showSpaceportInfo = (location) => {
    if (this.props.spaceportsLoadStatus.loaded) {
      const [longitude, latitude] = location;

      const port = this.props.spaceports.find((port) => (
        Math.abs(port.latitude - latitude) <= 3 &&
        Math.abs(port.longitude - longitude) <= 3
      ));

      if (port) {
        this.props.onSetActiveSpaceport(port);
        this.setState({
          selectedSpaceport: port,
        });
      }
    }
  };

  render() {
    return (
      <div className={styles.Dashboard}>
        <Globe ref={this.globe}
               activeSpaceport={this.props.activeSpaceport}
               spaceports={this.props.spaceports}
               spaceportsLoadStatus={this.props.spaceportsLoadStatus}
               afterSetActiveSpaceport={this.props.afterSetActiveSpaceport}
               onLocationSelected={this.showSpaceportInfo} />
        <SpaceportPanel spaceport={this.state.selectedSpaceport} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeSpaceport: state.spaceports.activeSpaceport,
    spaceports: state.spaceports.spaceports,
    spaceportsLoadStatus: state.spaceports.spaceportsLoadStatus,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadSpaceports: () => dispatch(spaceportActions.loadSpaceportsList()),
    onSetActiveSpaceport: (port) => dispatch(spaceportActions.setActiveSpaceport(port)),
    afterSetActiveSpaceport: () => dispatch(spaceportActions.setActiveSpaceportSuccess()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
