import React from 'react';
import styles from './NavItems.module.sass';

import NavItem from '../NavItem/NavItem';

const NavItems = (props) => (
  <ul className={styles.NavItems}>
    <NavItem onClick={props.onClick} to="/" exact>Globe</NavItem>
  </ul>
);

export default NavItems;
