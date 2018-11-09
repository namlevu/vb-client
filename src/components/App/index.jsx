// src/components/App/index.jsx
import React from 'react';
import { withRouter, Switch, BrowserRouter, Route } from 'react-router-dom';

import { Home, About, Posts } from '../../components'; // register components
import { Header, Footer } from '../../components/Layout'; // register layouts

const App = (props) => {
  return (
    <Switch>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/who-am-i" component={About} />
        <Route path="/posts" component={Articles} />
        <Route path="/login" render={() => <div>Login</div>} />
        <Footer />
      </div>
    </Switch>
  )
}

export default withRouter(App);
