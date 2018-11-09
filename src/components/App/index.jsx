// src/components/App/index.jsx
import React from 'react';
import { withRouter, Switch, BrowserRouter, Route } from 'react-router-dom';

import { Home, About, Posts, Auth } from '../../components'; // register components
import { Header, Footer } from '../../components/Layout'; // register layouts

const App = (props) => {
  return (
    <Switch>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} />
        <Route path="/login" component={Auth}  />
        <Route path="/logout" component={Auth}  />
        <Footer />
      </div>
    </Switch>
  )
}

export default withRouter(App);
