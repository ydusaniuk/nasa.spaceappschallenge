import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavItem.module.sass';

const NavItem = (props) => (
  <li className={styles.NavItem} onClick={props.onClick}>
    <NavLink activeClassName={styles.active}
             to={props.to}
             exact={props.exact}>
      {props.children}
    </NavLink>
  </li>
);

export default NavItem;
