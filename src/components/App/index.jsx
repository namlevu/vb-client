// src/components/App/index.jsx
import React from 'react';
import { withRouter, Switch, BrowserRouter, Route } from 'react-router-dom';

import { Home, About, Header, Footer } from '../../components';


const App = (props) => {
  return (
    <Switch>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/who-am-i" component={About} />
        <Footer />
      </div>
    </Switch>
  )
}

export default withRouter(App);
