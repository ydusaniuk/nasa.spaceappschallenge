import React from 'react';

import styles from './LaunchesList.module.sass';

class LaunchesList extends React.Component {
  render() {
    return (
      <div className={styles.LaunchesList}>
        {
          this.props.spaceport
            ? (
              <React.Fragment>
                <h2>{this.props.spaceport.name}</h2>
                <p>[{this.props.spaceport.lat}, {this.props.spaceport.lng}]</p>
              </React.Fragment>
            )
            : null
        }
      </div>);
  }
}

export default LaunchesList;
