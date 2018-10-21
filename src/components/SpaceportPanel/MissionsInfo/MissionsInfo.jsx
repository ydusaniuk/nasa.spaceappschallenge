import React from 'react';

import styles from './MissionsInfo.module.sass';
import panelStyles from '../../shared/Panel.module.sass';

const MissionsInfo = (props) => (
  <div className={[styles.MissionsInfo, panelStyles.Panel].join(' ')}>
    <h2 className={panelStyles.Title}>Mission</h2>
    {
      !props.missions
        ? <p>N/A</p>
        : (
          <div className={panelStyles.Content}>
            <p><span>Name:</span> {props.missions.mission}</p>
            <p><span>Company:</span> {props.missions.company}</p>
            <p><span>Rocket:</span> {props.missions.rocket}</p>
            <p><span>Description:</span> {props.missions.desc}</p>
            <p><span>Launch date:</span> {new Date(props.missions.date).toDateString()}</p>
          </div>
        )
    }
  </div>
);

export default MissionsInfo;
