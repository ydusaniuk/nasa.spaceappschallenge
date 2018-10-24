import React from 'react';

import styles from './MissionSummary.module.sass';
import panelStyles from '../shared/Panel.module.sass';

const MissionSummary = (props) => {
  const missions = props.spaceport ? props.spaceport.missions : null;

  return (
    <div className={[styles.MissionSummary, panelStyles.Panel].join(' ')}>
    <h2 className={panelStyles.Title}>Mission</h2>

    <h3 className={panelStyles.Subtitle}>Summary</h3>
      {
        !missions
          ? <p>N/A</p>
          : (
            <div className={panelStyles.Content}>
            <p><span>Name:</span> {missions.mission}</p>
            <p><span>Company:</span> {missions.company}</p>
            <p><span>Rocket:</span> {missions.rocket}</p>
            <p><span>Description:</span> {missions.desc}</p>
            <p><span>Launch date:</span> {missions.date.toDateString()}</p>
          </div>
          )
      }

      <h3 className={panelStyles.Subtitle}>Spaceport</h3>

      {/*{*/}
      {/*!props.spaceport ? null*/}
      {/*: (*/}
      {/*<div className={panelStyles.Content}>*/}
      {/*<p><span>Host:</span> {props.spaceport.host}</p>*/}
      {/*</div>*/}
      {/*)*/}
      {/*}*/}
  </div>
  )
};

export default MissionSummary;
