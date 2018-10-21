import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Missions from './containers/Missions/Missions';
import Dashboard from './containers/Dashboard/Dashboard';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/missions" component={Missions}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
