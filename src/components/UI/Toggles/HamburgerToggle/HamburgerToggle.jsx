import React from 'react';

import styles from './HamburgerToggle.module.sass';

const HamburgerToggle = (props) => (
  <div className={styles.HamburgerToggle} onClick={props.onClick}>
    <span/>
    <span/>
    <span/>
  </div>
);

export default HamburgerToggle;
