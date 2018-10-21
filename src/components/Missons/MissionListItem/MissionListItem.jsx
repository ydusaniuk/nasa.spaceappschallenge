import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from './MissionListItem.module.sass';

class MissionListItem extends React.Component {
  state = { isOpen: false };

  toggleAccordion = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      }
    })
  };

  updateStore = (port) => {
    this.props.onClick(port);
    this.props.history.push('/');
  };

  render() {
    const mission = this.props.spaceport.missions;

    const missionListClasses = [styles.MissionListItem];
    if (this.state.isOpen)
      missionListClasses.push(styles.Open);

    return (
      <div className={missionListClasses.join(' ')}>
        <button className={styles.Accordion} onClick={this.toggleAccordion}>{mission.mission}</button>
        <div className={styles.Panel}>
          <p><span>Company:</span> {mission.company}</p>
          <p><span>Rocket:</span> {mission.rocket}</p>
          <p><span>Start date:</span> {new Date(mission.date).toDateString()}</p>
          <p>{mission.desc}</p>
          <button className={styles.Action}
                  onClick={() => this.updateStore(this.props.spaceport)}>Find on map</button>
          {
            !mission.live ? null
              : <button className={[styles.Action, styles.Outer].join(' ')}
                        onClick={()=> window.open(mission.live, "_blank")}>Watch live</button>
          }

        </div>
      </div>
    );
  }
}

export default withRouter(MissionListItem);
