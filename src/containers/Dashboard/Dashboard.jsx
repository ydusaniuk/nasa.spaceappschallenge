import React from 'react';

import styles from './Dashboard.module.sass';

import Globe from '../../components/Globe/Globe';

class Dashboard extends React.Component {
  render() {
    return (
      <div className={styles.Dashboard}>
        <Globe/>
      </div>
    );
  }
}

export default Dashboard;
