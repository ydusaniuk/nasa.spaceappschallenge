import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from './MissionListItem.module.sass';

import Socials from '../../UI/Socials/Socials';

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
          <p><span>Company:</span> {mission.company} {mission.type &&
          <span style={{ fontStyle: 'italic' }}>({mission.type})</span>} </p>
          <p><span>Rocket:</span> {mission.rocket}</p>
          <p><span>Start date:</span> {mission.date.toDateString()}</p>
          <p><span>Location:</span> [{this.props.spaceport.latitude}, {this.props.spaceport.longitude}]</p>

          <p>{mission.desc}</p>
          <div className={styles.Footer}>
            <div>
              <button className={styles.Action}
                      onClick={() => this.updateStore(this.props.spaceport)}>Find on map</button>
                {
                  !mission.live ? null
                    : <button className={[styles.Action, styles.Outer].join(' ')}
                              onClick={() => window.open(mission.live, '_blank')}>Watch live</button>
                }
              </div>
              <Socials fb={mission.facebook} tw={mission.twitter}/>
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(MissionListItem);
