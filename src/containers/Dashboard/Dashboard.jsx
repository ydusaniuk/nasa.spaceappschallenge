import React from 'react';
import { connect } from 'react-redux';

import styles from './Dashboard.module.sass';

import Globe from '../../components/Globe/Globe';
import spaceportActions from '../../store/actions/spaceport.actoins';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.onLoadSpaceports();
  }

  showSpaceportInfo = (port) => {
    console.log(port);
  };

  render() {
    return (
      <div className={styles.Dashboard}>
        <Globe spaceports={this.props.spaceports}
               spaceportsLoadStatus={this.props.spaceportsLoadStatus}
               onSpaceportSelected={this.showSpaceportInfo} />
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
