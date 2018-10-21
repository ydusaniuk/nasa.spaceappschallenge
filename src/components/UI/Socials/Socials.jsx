import React from 'react';

import styles from './Socials.module.sass'

import fbIcon from '../../../assets/facebook.png';
import twIcon from '../../../assets/twitter.png';

const Socials = (props) => (
  <div className={styles.Socials}>
    {props.fb && <i onClick={() => window.open(props.fb, '_blank')}><img src={fbIcon} alt="F" /></i>}
    {props.tw && <i onClick={() => window.open(props.tw, '_blank')}><img src={twIcon} alt="T" /></i>}
  </div>
);

export default Socials;
