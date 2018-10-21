import React from 'react';

import styles from './Toolbar.module.sass';
import uiStyles from '../../shared/CommonUI.module.sass';

import NavItem from '../NavItem/NavItem';
import NavItems from '../NavItems/NavItems';
import HamburgerToggle from '../../UI/Toggles/HamburgerToggle/HamburgerToggle';

const Toolbar = (props) => (
  <div className={styles.Toolbar}>
    <HamburgerToggle onClick={props.toggleMenuClicked}/>
    <nav className={uiStyles.desktopOnly}>
      <NavItems isAuthenticated={props.isAuthenticated}/>
    </nav>
    <nav className={uiStyles.desktopOnly}>
      <NavItem type="button" onClick={props.onClick} to="/newsfeed" exact>Newsfeed</NavItem>
    </nav>
  </div>
);

export default Toolbar;
