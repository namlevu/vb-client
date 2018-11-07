// src/components/Article/Form/index.jsx
import React from 'react';
import axios from 'axios';

class Form extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      slug: '',
      tags:[],
      content:'',
      author_id: ''
    }

    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }
  handleSubmit(){
    const { title, slug, tags, content, author_id } = this.state;

    return axios.post('http://127.0.0.1:9009/v1/posts', {
      title, slug, tags, content, author_id,
    });
  }

  render() {
    const { title, slug, tags, content, author_id  } = this.state;

    return (
      <div className="col-12 col-lg-6 offset-lg-3">
        <input
          onChange={(ev) => this.handleChangeField('title', ev)}
          value={title}
          className="form-control my-3"
          placeholder="Post Title"
        />
        <input
          onChange={(ev) => this.handleChangeField('slug', ev)}
          value={slug}
        />
        <input
          onChange={(ev) => this.handleChangeField('tags', ev)}
          value={tags}
          className="form-control my-3"
          placeholder="Post tags"
        />
        <textarea
          onChange={(ev) => this.handleChangeField('content', ev)}
          className="form-control my-3"
          placeholder="Post content"
          value={content}>
        </textarea>
        <input
          onChange={(ev) => this.handleChangeField('author_id', ev)}
          value={author_id}
          className="form-control my-3"
          placeholder="Post Author"
        />
        <button onClick={this.handleSubmit} className="btn btn-primary float-right">Submit</button>
      </div>

    )
  }
}

export default Form;
