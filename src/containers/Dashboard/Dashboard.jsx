import React from 'react';
import { connect } from 'react-redux';

import styles from './Dashboard.module.sass';

import Globe from '../../components/Globe/Globe';
import spaceportActions from '../../store/actions/spaceport.actoins';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.onLoadSpaceports();
  }

  showSpaceportInfo = (location) => {
    if (this.props.spaceportsLoadStatus.loaded) {
      const [lng, lat] = location;

      const port = this.props.spaceports.find((port) => (
        Math.abs(port.lat - lat) <= 1.5 &&
        Math.abs(port.lng - lng) <= 1.5
      ));

      if (port) {
        // TODO: notify app that port has been selected
        console.log(port);
      }
    }
  };

  render() {
    return (
      <div className={styles.Dashboard}>
        <Globe spaceports={this.props.spaceports}
               spaceportsLoadStatus={this.props.spaceportsLoadStatus}
               onLocationSelected={this.showSpaceportInfo} />
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
