import React from 'react';

export default class PostItem extends React.Component {
  render() {
    console.log("PostItem render called")
    //console.log(this.props.post)
    return (
      <div className="card mb-4">
        <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap" />
        <div className="card-body">
          <h2 className="card-title">{this.props.post.title}</h2>
          <p className="card-text">
            {this.props.post.content}
          </p>
          <a href="#" className="btn btn-primary">Read More &rarr;</a>
        </div>
        <div className="card-footer text-muted">
          Posted on {Date(this.props.post.created_at).toLocaleString()} by
          <a href="#">{this.props.post.author_id}</a>
        </div>
      </div>
    )
  }
}
