import React from 'react';

import styles from './Missions.module.sass';
import panelStyles from '../../components/shared/Panel.module.sass';

class Missions extends React.Component {
  render() {
    return (
      <div className={[panelStyles.Panel, styles.Missions].join(' ')}>
        <div className={panelStyles.TitleBlock}>
          <h2 className={panelStyles.Title}>Missions</h2>
          {/*<ListLayoutToggle iconName="list"/>*/}
        </div>
      </div>
    )
  }
}

export default Missions;
