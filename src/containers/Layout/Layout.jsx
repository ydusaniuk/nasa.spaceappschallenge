import React from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import styles from './Layout.module.sass';

class Layout extends React.Component {
  state = {
    showSideDrawer: false,
  };

  // closeSideDrawerHandler = () =>
  //   this.setState({ showSideDrawer: false });

  toggleSideDrawerHandler = () => {
    console.log('toggle side drawer');

    // this.setState((prevState) => {
    //   return {
    //     showSideDrawer: !prevState.showSideDrawer,
    //   }
    // });
  };

  render() {
    return (
      <div className={styles.Layout}>
        <Toolbar toggleMenuClicked={this.toggleSideDrawerHandler}/>
        {/*<SideDrawer isOpen={this.state.showSideDrawer}*/}
                    {/*onClose={this.closeSideDrawerHandler}/>*/}
        <main className={styles.Content}>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Layout;
