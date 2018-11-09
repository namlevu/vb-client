import React from 'react';

import LoginForm from './LoginForm';

import './scss/style.scss';

export default class Auth extends React.Component {
  render(){
    var pathname = this.props.location.pathname;
    var search = this.props.location.search;
    console.log(pathname);
    if(pathname == "/login") {
      return(
        <LoginForm />
      )
    }
    if(pathname == "/logout") {
      return(
        <h1> Logout </h1>
      )
    }
    return(
      <h1> Page not found!!! </h1>
    )
  }
}
