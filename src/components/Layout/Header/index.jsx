import React from 'react';

export default class Header extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark navbar-teal bg-teal fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <div className="logo">
              <div>
                <span className="white-text">brse</span>
                <span className="black-text">.work</span>
              </div>
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse menu" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
