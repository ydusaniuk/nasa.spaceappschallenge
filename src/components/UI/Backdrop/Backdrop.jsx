import React from 'react';

import styles from './Backdrop.module.sass';

const Backdrop = (props) => {
  const classes = [styles.Backdrop];
  if (props.visible)
    classes.push(styles.Open);

  return (
    <div className={classes.join(' ')} onClick={props.onClick} />
  );
};

export default Backdrop;
