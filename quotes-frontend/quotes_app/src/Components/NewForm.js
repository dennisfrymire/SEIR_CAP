import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class NewForm extends Component {

    state = {
        quotes: [],
        formInputs: {
            quote: '',
            author: '',
            tags: ['']
          }
        }
      
    
      handleChange = (event) => {
        const updateInput = Object.assign( this.state.formInputs, { [event.target.id]: event.target.value })
        this.setState(updateInput)
      }
      
      handleSubmit = (event) =>{
        event.preventDefault()
        fetch('http://localhost:3000/quotes', {
          body: JSON.stringify(this.state.formInputs),
          method: 'POST',
       headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
       }
      })
       .then(createdQuote => {
         return createdQuote.json()
       })
      
       .then(jsonedQuote => {
         // reset the form
         this.setState({
           formInputs: {
             title: '',
             quote: '',
             author: '',
             tags: ['']
            },
           quotes: [jsonedQuote, ...this.state.quotes]
         })
       })
       .catch(error => console.log(error))
      }
      
       componentDidMount() {
        this.getQuotes()
      }
      
      getQuotes = () =>{
        fetch('http://localhost:3000/quotes')
          .then(response => response.json())
          .then(json => this.setState({quotes: json}))
          .catch(error => console.error(error))
      }

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


render () {
  return (
    <Form onSubmit={this.handleSubmit}>
    <FormGroup row>
        <Label htmlFor="quote" sm={2}>Quote</Label>
        <Col sm={10}>
          <Input type="textarea" id="newQuote" placeholder="To be or not to be..."  onChange={this.handleChange}  />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="author" sm={2}>Author</Label>
        <Col sm={10}>
          <Input type="text" name="author" id="newAuthor" onChange={this.handleChange} placeholder="Abraham Lincoln, Anonymous..." />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="tags" sm={2}>Tags</Label>
        <Col sm={10}>
          <Input type="text" name="tags" id="newTags" onChange={this.handleChange} placeholder="Motivation, Love, etc.">
            
          </Input>
        </Col>
      </FormGroup>
      
      
      
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}
};

export default NewForm;