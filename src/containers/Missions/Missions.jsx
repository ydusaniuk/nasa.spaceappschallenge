import React from 'react';
import { connect } from 'react-redux';

import styles from './Missions.module.sass';
import panelStyles from '../../components/shared/Panel.module.sass';
import spaceportActions from '../../store/actions/spaceport.actoins';
import MissionListItem from '../../components/Missons/MissionListItem/MissionListItem';

class Missions extends React.Component {
  componentDidMount() {
    if (!this.props.spaceportsLoadStatus.loaded) {
      this.props.onLoadSpaceports();
    }
  }

  render() {
    return (
      <div className={[panelStyles.Panel, styles.Missions].join(' ')}>
        <div className={panelStyles.TitleBlock}>
          <h2 className={panelStyles.Title}>Missions</h2>
        </div>
        {
          this.props.spaceportsLoadStatus.loaded &&
          this.props.spaceports.map((port) =>
            <MissionListItem key={`${port.latitude}-${port.longitude}-${port.missions.date}-${port.missions.rocket}`}
                             spaceport={port} />
          )
        }
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Missions);
