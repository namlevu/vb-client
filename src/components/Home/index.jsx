import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import PostItem from '../../components/PostItem';

class Home extends React.Component {

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
                return(
                  <PostItem key={post.id} post={post} />
                )
            })}
          </div>
        </div>
      </div>
    )
  }

}

export default Home;
