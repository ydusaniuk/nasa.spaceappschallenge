import React from 'react';

import styles from './SpaceportPanel.module.sass';

import MissionsInfo from './MissionsInfo/MissionsInfo';
import SpaceportInfo from './SpaceportInfo/SpaceportInfo';

const SpaceportPanel = (props) => (
  <div className={styles.SpaceportPanel}>
    <SpaceportInfo spaceport={props.spaceport}/>
    <MissionsInfo missions={props.spaceport && props.spaceport.missions}/>
  </div>
);

export default SpaceportPanel;
