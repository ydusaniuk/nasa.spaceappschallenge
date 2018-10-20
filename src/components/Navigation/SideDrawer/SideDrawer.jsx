import React from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';

import styles from './SideDrawer.module.sass';

const SideDrawer = (props) => {
  const statusClassName = props.isOpen
    ? styles.Open : styles.Close;

  return (
    <React.Fragment>
      {/*<Backdrop onClick={props.onClose} visible={props.isOpen}/>*/}
      <div className={[styles.SideDrawer, statusClassName].join(' ')}>
        SideDrawer
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
