import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { Form } from '../../components/Article';


export default class Home extends React.Component {

  constructor(props) {
    console.log("Home constructor called")
    super(props);
    this.state = {
        posts: []
    }
  }

  componentDidMount() {
    console.log("Home componentDidMount called")
    axios.get(`http://127.0.0.1:9009/v1/posts`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-lg-6 offset-lg-3">
            {this.state.posts.map((post) => {
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
    )
  }

}
