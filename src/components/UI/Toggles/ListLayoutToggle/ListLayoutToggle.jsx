import React from 'react';
import PropTypes from 'prop-types';

import styles from './ListLayoutToggle.module.sass';

const ListLayoutToggle = (props) => {
  let iconTemplate;
  switch (props.iconName.toLowerCase()) {
    case 'list':
      iconTemplate = (
        <div className={styles.List}>
          <span/><span/>
          <span/><span/>
          <span/><span/>
        </div>
      );
      break;

    case 'grid':
      iconTemplate = (<div className={styles.Grid}>[] [] []</div>);
      break;

    default:
      iconTemplate = null;
      break;
  }

  return (
    <div className={[styles.ListLayoutToggle].join(' ')}>
      {iconTemplate}
    </div>
  )
};

ListLayoutToggle.propTypes = {
  iconName: PropTypes.string.isRequired
};

export default ListLayoutToggle;
