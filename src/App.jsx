import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Dashboard from './containers/Dashboard/Dashboard';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Dashboard}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
