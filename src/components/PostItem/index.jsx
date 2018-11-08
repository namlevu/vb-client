import React from 'react';

export default class PostItem extends React.Component {
  render() {
    console.log("PostItem render called")
    //console.log(this.props.post)
    return (
      <div className="row">
        <div className="col-12 post-header">
          {this.props.post.title} - {this.props.post.created_at}
        </div>
        <div className="col-12 post-description">
          {this.props.post.content}
        </div>
        <div className="col-12 post-footer">
          {this.props.post.author_id}
        </div>
      </div>
    )
  }
}
