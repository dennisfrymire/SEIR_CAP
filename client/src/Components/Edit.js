import React, { Component } from 'react';
import axios from 'axios';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { array } from 'prop-types';

import './Style.css';


class Edit extends Component {

  constructor(props) {
    super(props);

    // this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeQuote = this.onChangeQuote.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      // username: '',
      quote: '',
      author: '',
      tags: [''],
      users: []
    }
  }

  componentDidMount() {
    let quoteId = this.props.match.params.id
    axios.get(`http://localhost:3000/quotes/${quoteId}`)
      .then(response => {
          this.setState({
            // username: response.data.username,
            quote: response.data.quote,
            author: response.data.author,
            tags: response.data.tags
          })
        })

      .catch((error) => {
        console.log(error);
      })
}

onChangeQuote(e) {
  this.setState({
    quote: e.target.value
  })
};

onChangeAuthor(e) {
  this.setState({
    author: e.target.value
  })
};

onChangeTags(e) {
  this.setState({
    tags: e.target.value
  })
};

onSubmit(e) {
  e.preventDefault();

  const quote = {
    // username: this.state.username,
    quote: this.state.quote,
    author: this.state.author,
    tags: this.state.tags
  }

let quoteId = this.props.match.params.id
axios.post(`http://localhost:3000/quotes/update/${quoteId}`, quote)
      .then(res => console.log(res.data));

window.location = '/';
}
        

render() {
  return (
    <div className="text-left headline">
      <h3>Edit Quote</h3>
      <form onSubmit={this.onSubmit}>
        
          <div className="form-group"> 
            <label>Quote </label>
            <input type="textarea"
                required
                className="form-control"
                value={this.state.quote}
                onChange={this.onChangeQuote}
                />
            
          </div>
          <div className="form-group"> 
            <label>Author</label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.author}
                onChange={this.onChangeAuthor}
                />
          </div>
          <div className="form-group">
            <label>Tags</label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.tags}
                onChange={this.onChangeTags}
                />
          </div>
          
       
          <div className="form-group">
            <input type="submit" value="Edit Quote" className="btn btn-outline-secondary" />
          </div>
        </form>
        
      </div>
      )
    }
  }

export default Edit;