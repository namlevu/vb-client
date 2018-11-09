import React from 'react';
import axios from 'axios';
import slugify from 'slugify';

export default class CreatePostForm extends React.Component {
  constructor(props) {
    console.log("Home constructor called")
    super(props);
    this.state = {
        title:'',
        slug:'',
        tags:[],
        content:'',
        author_id:'5bdffd3e7d02fa16e445a921'
    }

  }

  handleChange(event) {
    this.setState({
      title: event.target.title,
      slug: slugify(event.target.title),
      tags: event.target.tags,
      content: event.target.content
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const post = {
      title: this.state.title,
      slug: this.state.slug,
      tags: this.state.tags,
      content: this.state.content,
      author_id: this.state.author_id
    };
    console.log(post);

    axios.post(`http://127.0.0.1:9009/v1/posts`, { post })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return(
      <div className="container">
        <div className="row mt-2">
          <div className="col-md-8 col-sm-8">
            <form onSubmit={this.handleSubmit}>
              <h4> New Post </h4>
              <div className="form-group row">
                <div className="col-10">
                  <input type="text"
                          className="form-control"
                          placeholder="Title"
                          value={this.state.title}
                          onChange={this.handleChange} />
                </div>
                <label className="col-2">*</label>
              </div>
              <div className="form-group row">
                <div className="col-10">
                  <input type="text"
                          className="form-control"
                          placeholder="Tags"
                          value={this.state.tags}
                          onChange={this.handleChange} />
                </div>
                <label className="col-2">*</label>
              </div>
              <div className="form-group row">
                <div className="col-12">
                  <textarea className="form-control"
                            placeholder="Content"
                            rows="9"
                            value={this.state.tags}
                            onChange={this.handleChange} />
                </div>
                <label className="col-12">*</label>
              </div>
              <div className="form-group row">
                <div className="col-sm-12 text-align-r">
                  <input className="btn btn-primary" type="submit" value="Submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
