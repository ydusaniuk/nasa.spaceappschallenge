import React from 'react';
import { connect } from 'react-redux';

import styles from './Dashboard.module.sass';

import spaceportActions from '../../store/actions/spaceport.actoins';

import Globe from '../../components/Globe/Globe';
import SpaceportPanel from '../../components/SpaceportPanel/SpaceportPanel';

class Dashboard extends React.Component {
  globe = React.createRef();
  state = {
    selectedSpaceport: null,
  };

  componentDidMount() {
    this.props.onLoadSpaceports();
  }

  showSpaceportInfo = (location) => {
    if (this.props.spaceportsLoadStatus.loaded) {
      const [longitude, latitude] = location;

      const port = this.props.spaceports.find((port) => (
        Math.abs(port.latitude - latitude) <= 1.5 &&
        Math.abs(port.longitude - longitude) <= 1.5
      ));

      if (port) {
        this.globe.current.focusOnLocation([longitude, latitude]);

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
               spaceports={this.props.spaceports}
               spaceportsLoadStatus={this.props.spaceportsLoadStatus}
               onLocationSelected={this.showSpaceportInfo} />
        <SpaceportPanel spaceport={this.state.selectedSpaceport} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    spaceports: state.spaceports.spaceports,
    spaceportsLoadStatus: state.spaceports.spaceportsLoadStatus,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadSpaceports: () => dispatch(spaceportActions.loadSpaceportsList()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
