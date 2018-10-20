import React from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';

import styles from './SideDrawer.module.sass';
import NavItems from '../NavItems/NavItems';

const SideDrawer = (props) => {
  const statusClassName = props.isOpen
    ? styles.Open : styles.Close;

  return (
    <div className={[styles.SideDrawer, statusClassName].join(' ')}>
      <nav>
        <NavItems onClick={props.onClick} />
      </nav>
    </div>
  );
};

export default SideDrawer;
