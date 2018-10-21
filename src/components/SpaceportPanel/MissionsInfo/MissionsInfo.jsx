import React from 'react';

import styles from './MissionsInfo.module.sass';
import panelStyles from '../shared/Panel.module.sass';

const MissionsInfo = (props) => (
  <div className={[styles.MissionsInfo, panelStyles.Panel].join(' ')}>
    <h2 className={panelStyles.Title}>Missions</h2>
    {
      props.missions
        ? (<div>Missions...</div>)
        : <p>N/A</p>
    }
  </div>
);

export default MissionsInfo;
