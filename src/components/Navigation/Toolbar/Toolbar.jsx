import React from 'react';

import styles from './Toolbar.module.sass';
import uiStyles from '../../shared/CommonUI.module.sass';

import HamburgerToggle from '../../UI/Toggles/HamburgerToggle/HamburgerToggle';

const Toolbar = (props) => (
  <div className={styles.Toolbar}>
    <HamburgerToggle onClick={props.toggleMenuClicked}/>
  </div>
);

export default Toolbar;
