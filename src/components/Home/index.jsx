import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import PostItem from '../../components/Post/PostItem';
import Sidebar from '../../components/Layout/Sidebar';

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
        <div className="row pt-2">
          <div className="col-md-8">
            <p>  <a href="#">Home 〉</a> </p>


            {this.state.posts.map((post) => {
                return(
                  <PostItem key={post.id} post={post} />
                )
            })}
          </div>
          <Sidebar />
        </div>
      </div>
    )
  }

}

export default Home;
