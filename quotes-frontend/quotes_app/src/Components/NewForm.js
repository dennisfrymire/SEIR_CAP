import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class NewForm extends React.Component {

    state = {
        quote: '',
        author: '',
        tags: ['']
    }

    handleChange = (event) => {
        // setState is a built-in method of the React library
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    clearForm = () => {
        this.setState({
        quote: '',
        author: '',
        tags: ['']
        })
    }



render () {
  return (
    <Form>
    <FormGroup row>
        <Label for="exampleText" sm={2}>Quote</Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="newQuote" value={this.state.quote} onChange={this.handleChange} placeholder="To be or not to be..." />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="author" sm={2}>Author</Label>
        <Col sm={10}>
          <Input type="text" name="author" id="newAuthor" value={this.state.quote} onChange={this.handleChange} placeholder="Abraham Lincoln, Anonymous..." />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="tags" sm={2}>Tags</Label>
        <Col sm={10}>
          <Input type="text" name="tags" id="newTags" value={this.state.quote} onChange={this.handleChange} placeholder="Motivation, Love, etc.">
            
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