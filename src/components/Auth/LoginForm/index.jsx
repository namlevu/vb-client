import React from 'react';

export default class LoginForm extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row mt-2 justify-content-center">
          <div className="col-md-5 col-sm-5">
            <h4> Login </h4>
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-2 col-form-label text-align-r"><i className="far fa-envelope"></i></label>
              <div className="col-10">
                <input type="email" className="form-control login-input" placeholder="Email" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-2 col-form-label text-align-r"><i className="fas fa-lock"></i></label>
              <div className="col-10">
                <input type="password" className="form-control login-input" placeholder="Password" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-12 text-align-r">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
