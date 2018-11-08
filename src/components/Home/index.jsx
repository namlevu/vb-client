import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import PostList from '../../components/PostList';

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
          <PostList posts={this.state.posts} />
        </div>
      </div>
    )
  }

}

export default Home;
