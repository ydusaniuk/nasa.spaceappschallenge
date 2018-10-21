import React from 'react';

import styles from './MissionListItem.module.sass';

class MissionListItem extends React.Component {
  state = { isOpen: false };

  toggleAccordion = () => {
    console.log('sdfljksdfj');

    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      }
    })
  };

  render() {
    const mission = this.props.spaceport.missions;

    const missionListClasses = [styles.MissionListItem];

    if (this.state.isOpen)
      missionListClasses.push(styles.Open);

    return (
      <div className={missionListClasses.join(' ')}>
        <button className={styles.Accordion} onClick={this.toggleAccordion}>{mission.mission}</button>
        <div className={styles.Panel} >
          <p><span>Company:</span> {mission.company}</p>
          <p><span>Rocket:</span> {mission.rocket}</p>
          <p><span>Start date:</span> {new Date(mission.date).toDateString()}</p>
          <p>{mission.desc}</p>

        </div>
      </div>
    );
  }
}

export default MissionListItem;
