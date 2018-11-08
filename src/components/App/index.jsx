// src/components/App/index.jsx
import React from 'react';
import { withRouter, Switch, BrowserRouter, Route } from 'react-router-dom';

import { Home, About } from '../../components';


const App = (props) => {
  return (
    <Switch>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/who-am-i" component={About} />
      </div>
    </Switch>
  )
}

export default withRouter(App);
