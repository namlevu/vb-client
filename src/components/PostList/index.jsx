import React from 'react';
import PostItem from '../../components/PostItem';

export default class PostList extends React.Component {
  render() {
    console.log("PostList render called")
    return (
      {this.props.posts.map((post) => {
          return(
            <PostItem key={post.id} post={post} />
          )
      })}
    )
  }
}
