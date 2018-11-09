import React from 'react';

export default class Footer extends React.Component {
  render() {
    return(
      <section id="footer" className="footer navbar-fixed-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item">
                  <a href="javascript:void();">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li className="list-inline-item"><a href="javascript:void();"><i className="fab fa-twitter-square"></i></a></li>
                <li className="list-inline-item"><a href="javascript:void();"><i className="fab fa-instagram"></i></a></li>
                <li className="list-inline-item"><a href="javascript:void();"><i className="fab fa-google-plus-square"></i></a></li>
                <li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
              <p>
                Xin chao cac ban den voi trang web cua toi
              </p>
              <p className="h6">
              &copy All right Reversed.
              <a className="text-green ml-2" href="http://brse.work" target="_blank">Brse.Work</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
