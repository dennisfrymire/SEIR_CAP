import React, { Component } from 'react';
import axios from 'axios';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { array } from 'prop-types';

class NewForm extends Component {

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
      tags: array,
      // users: []
    }
  }

  // componentDidMount() {
  //   axios.get('http://localhost:3000/users/')
  //     .then(response => {
  //       if (response.data.length > 0) {
  //         this.setState({
  //           users: response.data.map(user => user.username),
  //           username: response.data[0].username
  //         })
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })

  // }

// onChangeUsername(e) {
//   this.setState({
//     username: e.target.value
//   })
// };

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

console.log(quotePackage);

axios.post('http://localhost:3000/quotes/add', quotePackage)
      .then(res => console.log(res.data));

window.location = '/';


}
        
// handleChange = (event) => {
// const updateInput = Object.assign( this.state.formInputs, { [event.target.id]: event.target.value })
// this.setState(updateInput)
// }
      
//       handleSubmit = (event) =>{
//         event.preventDefault()
//         fetch('http://localhost:3000/quotes', {
//           body: JSON.stringify(this.state.formInputs),
//           method: 'POST',
//        headers: {
//          'Accept': 'application/json, text/plain, */*',
//          'Content-Type': 'application/json'
//        }
//       })
//        .then(createdQuote => {
//          return createdQuote.json()
//        })
      
//        .then(jsonedQuote => {
//          // reset the form
//          this.setState({
//            formInputs: {
//              title: '',
//              quote: '',
//              author: '',
//              tags: ['']
//             },
//            quotes: [jsonedQuote, ...this.state.quotes]
//          })
//        })
//        .catch(error => console.log(error))
//       }
      
//        componentDidMount() {
//         this.getQuotes()
//       }
      
//       getQuotes = () =>{
//         fetch('http://localhost:3000/quotes')
//           .then(response => response.json())
//           .then(json => this.setState({quotes: json}))
//           .catch(error => console.error(error))
//       }

    // constructor(props) {
    //     super(props);
    //     this.state({
    //         formInputs: {
    //         quote: '',
    //         author: '',
    //         tags: ['']
    //     };
    
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }
    
    //   handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }
    
    //   handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    //   }


    // state = {
    //     quote: '',
    //     author: '',
    //     tags: ['']
    // }

    // handleChange = (event) => {
    //     // setState is a built-in method of the React library
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     })
    // }

    // handleSubmit = (event, newFormState) => {
    //     event.preventDefault();
        
    //     console.log(newFormState)
    //     fetch('/quotes', {
    //         body: JSON.stringify(newFormState),
    //         method: "POST",
    //         headers: {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(response => response.json())
    //         .then(newQuote => {
    //             console.log(newQuote)
    //             this.setState({
    //                 userQuotes: [...this.state.userQuotes, newQuote],
                    

    //             })
    //         })
    // }

    // clearForm = () => {
    //     this.setState({
    //     quote: '',
    //     author: '',
    //     tags: ['']
    //     })
    // }

    // {(ev) => this.props.handleSubmit(ev, this.state, this.clearForm())}

    render() {
      return (
      <div>
        <h3>Create New Quote</h3>
        <form onSubmit={this.onSubmit}>
          {/* <div className="form-group"> 
            <label>Username: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div> */}
          <div className="form-group"> 
            <label>Quote </label>
            <input  type="text"
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
            <input type="submit" value="Create Quote" className="btn btn-primary" />
          </div>
        </form>
      </div>
      )
    }
  }
// render () {
//   return (
//     <Form onSubmit={this.onSubmit}>
//     <FormGroup row>
//         <Label sm={2}>Quote</Label>
//         <Col sm={10}>
//           <Input type="textarea" id="newQuote" placeholder="To be or not to be..."  onChange={this.handleChange}  />
//         </Col>
//       </FormGroup>
//       <FormGroup row>
//         <Label for="author" sm={2}>Author</Label>
//         <Col sm={10}>
//           <Input type="text" name="author" id="newAuthor" onChange={this.handleChange} placeholder="Abraham Lincoln, Anonymous..." />
//         </Col>
//       </FormGroup>
//       <FormGroup row>
//         <Label for="tags" sm={2}>Tags</Label>
//         <Col sm={10}>
//           <Input type="text" name="tags" id="newTags" onChange={this.handleChange} placeholder="Motivation, Love, etc.">
            
//           </Input>
//         </Col>
//       </FormGroup>
      
      
      
//       <FormGroup check row>
//         <Col sm={{ size: 10, offset: 2 }}>
//           <Button>Submit</Button>
//         </Col>
//       </FormGroup>
//     </Form>
//   );
// }
// };

export default NewForm;