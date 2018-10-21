import React from 'react';

import styles from './SpaceportInfo.module.sass';
import panelStyles from '../../shared/Panel.module.sass';

const SpaceportInfo = (props) => (
  <div className={[styles.SpaceportInfo, panelStyles.Panel].join(' ')}>
    <h2 className={panelStyles.Title}>Spaceport Info</h2>
    {
      !props.spaceport ? null
        : (
          <div className={panelStyles.Content}>
            <p><span>Host:</span> {props.spaceport.host}</p>
            {/*<p><span>Latitude:</span> {props.spaceport.latitude}</p>*/}
            {/*<p><span>Longitude:</span> {props.spaceport.longitude}</p>*/}
          </div>
        )
    }
  </div>
);

export default SpaceportInfo;
