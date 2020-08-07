import React, {Component} from 'react';
import axios from 'axios';
import { array } from 'prop-types';

export default class New extends Component {

  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeQuote = this.onChangeQuote.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      // username: '',
      quote: '',
      author: '',
      tags: array,
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

onChangeUsername(e) {
  this.setState({
    username: e.target.value
  })
};

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

  const quotePackage = {
    // username: this.state.username,
    quote: this.state.quote,
    author: this.state.author,
    tags: this.state.tags
  }

axios.post('http://localhost:3000/quotes/add', quotePackage)
      .then(res => console.log(res.data));

window.location = '/';


}
render() {
  return (
      <div className="text-left headline new">
        <h3>Add New Quote</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group main-text"> 
            <label>Quote </label>
            <input type="textarea"
                required
                className="form-control"
                value={this.state.quote}
                onChange={this.onChangeQuote}
                />
            
          </div>
          <div className="form-group main-text"> 
            <label>Author</label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.author}
                onChange={this.onChangeAuthor}
                />
          </div>
          <div className="form-group main-text">
            <label>Tags</label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.tags}
                onChange={this.onChangeTags}
                />
          </div>
          
  
          <div className="form-group headline">
            <input type="submit" value="Add Quote" className="btn btn-outline-secondary" />
            <br/>
          </div>
        </form>
      </div>
      )
    }
  };