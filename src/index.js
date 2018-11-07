import React from 'react';
import createHistory from 'history/createBrowserHistory';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';

import store from './store';
import { App } from './components';

import '../resources/scss/style.scss';


ReactDOM.render(
  <Router history={createHistory()}>
    <Provider store={store}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Provider>
  </Router>,
  document.getElementById('root'),
);


const element =
<div className="row">
  <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
    <div className="posts">
      <div className="post">
        <div className="post-title">
          Những câu truyện không bao giờ kể đêm khuya<br/>
          <span className="timing">2018/11/08</span>
          <span className="author"><a>Nguyen Ngoc Ngan</a></span>
        </div>
        <div className="post-content">
          Đêm ấy Đào về nhà. Rồi không nhớ chuyện gì để gõ vào đây nữa.
          Thế nên, gõ vào đây vài dòng. Để xem là trên màn hình sẽ hiển thị.
          Như thế nào. Đêm ấy Đào về nhà. Rồi không nhớ chuyện gì để gõ.
          Vào đây nữa, thế nên gõ vào đây vài dòng để xem là trên màn hình.
          Sẽ hiển thị như thế nào ...
        </div>
      </div>
      <hr />
      <div className="post">
        <div className="post-title">
          Những câu truyện không bao giờ kể đêm khuya<br/>
          <span className="timing">2018/11/08</span>
          <span className="author"><a>Nguyen Ngoc Ngan</a></span>
        </div>
        <div className="post-content">
          Đêm ấy Đào về nhà. Rồi không nhớ chuyện gì để gõ vào đây nữa.
          Thế nên, gõ vào đây vài dòng. Để xem là trên màn hình sẽ hiển thị.
          Như thế nào. Đêm ấy Đào về nhà. Rồi không nhớ chuyện gì để gõ.
          Vào đây nữa, thế nên gõ vào đây vài dòng để xem là trên màn hình.
          Sẽ hiển thị như thế nào ...
        </div>
      </div>
      <hr />
      <div className="post">
        <div className="post-title">
          Những câu truyện không bao giờ kể đêm khuya<br/>
          <span className="timing">2018/11/08</span>
        </div>
        <div className="post-content">
          Đêm ấy Đào về nhà. Rồi không nhớ chuyện gì để gõ vào đây nữa.
          Thế nên, gõ vào đây vài dòng. Để xem là trên màn hình sẽ hiển thị.
          Như thế nào. Đêm ấy Đào về nhà. Rồi không nhớ chuyện gì để gõ.
          Vào đây nữa, thế nên gõ vào đây vài dòng để xem là trên màn hình.
          Sẽ hiển thị như thế nào ...
        </div>
      </div>
    </div>
  </div>
  <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
    RIGHT MENU
    <ul>
      <li>Top rate</li>
      <li>Top views</li>
      <li>Top comments</li>
      <li>Editor choices</li>
    </ul>
  </div>
</div>;
