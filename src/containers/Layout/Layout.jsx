import React from 'react';

import styles from './Layout.module.sass';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
  state = {
    showSideDrawer: false,
  };

  toggleSideDrawerHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
      }
    });
  };

  render() {
    return (
      <div className={styles.Layout}>
        <Toolbar toggleMenuClicked={this.toggleSideDrawerHandler} />
        <SideDrawer isOpen={this.state.showSideDrawer} />
        <main className={styles.Content}>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Layout;
