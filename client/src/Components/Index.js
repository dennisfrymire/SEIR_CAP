import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Card, CardText, CardBody,Container, Row, Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';

const Quote = (props) => (
  
  <Card>
  <CardBody>
    <CardText className="quote index text-left">{props.quote.quote}</CardText>
    <CardText className= "text-right author">- {props.quote.author}</CardText>
    <Link to={"/update/"+props.quote._id}>edit</Link> | <Link to="#" onClick={() => { props.deleteQuote(props.quote._id) }}>delete</Link>
    {/* <input type="submit" value="Add Quote" className="btn btn-outline-secondary" /> */}
  </CardBody>
  </Card>
)

export default class Index extends Component {

constructor(props) {
  super(props);

this.deleteQuote = this.deleteQuote.bind(this);

  this.state = {quotes: []};
}

componentDidMount() {
  axios.get('http://localhost:3000/quotes')
  .then(response => {
    this.setState({ quotes: response.data })
  })
  .catch((error) => {
    console.log(error);
  })
}

deleteQuote(id) {
  axios.delete('http://localhost:3000/quotes/'+id)
    .then(response => { console.log(response.data)});

  this.setState({
    quotes: this.state.quotes.filter(el => el._id !== id)
  })
}

quoteList() {
  return this.state.quotes.map(currentquote => {
    return <Quote quote={currentquote} deleteQuote={this.deleteQuote} key={currentquote._id}/>;
  })
}

render() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="card">
            <CardBody>
            <CardText>{this.quoteList()}</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    )}
  }


