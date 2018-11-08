import React from 'react';
import PostItem from '../../components/PostItem';

export default class PostList extends React.Component {
  render() {
    console.log("PostList render called")
    return (
      <div className="col-12 col-lg-6 offset-lg-3">
        {this.props.posts.map((post) => {
            return(
              <PostItem key={post.id} post={post} />
            )
        })}
      </div>
    )
  }
}
