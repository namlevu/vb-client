import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { Form } from '../../components/Article';


class Home extends React.Component {
  componentDidMount() {
    const { onLoad } = this.props;

    axios('http://127.0.0.1:9009/v1/posts')
      .then((res) => onLoad(res.data));
  }

  render() {
    const { posts } = this.props
    return (
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-lg-6 offset-lg-3">
            <h1 className="text-center">brse.work blog</h1>
          </div>
          <Form />
        </div>
        <div className="row pt-5">
          <div className="col-12 col-lg-6 offset-lg-3">
            {posts.map((post) => {
              return (
                <div className="card my-3">
                  <div className="card-header">
                    {post.title}
                  </div>
                  <div className="card-body">
                    {post.content}
                  </div>
                  <div className="card-footer">
                    <i>{post.author_id}
                      <p className="float-right">
                        {new Date(post.created_at).toLocaleDateString()}
                      </p>
                    </i>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.home.posts,
});

const mapDispatchToProps = dispatch => ({
  onLoad: data => dispatch({ type: 'HOME_PAGE_LOADED', data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
