import React, {Component} from 'react';
import {
  Card, CardText, CardBody, Button, Row, Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import CarouselPage from "./Carousel";
import NavBarItem from "./NavBar";

const Quote = props => (
  
  
  <Card>
  <CardBody>
    <CardText>{props.quote.quote}</CardText>
    <CardText className= "text-right">{props.quote.author}</CardText>
    <Link to={"/update/"+props.quote._id}>edit</Link> | <a href="#" onClick={() => { props.deleteQuote(props.quote._id) }}>delete</a>
  </CardBody>
  </Card>
  

  
  
  
  
  
 
  
)

class Index extends Component {

constructor(props) {
  super(props);

  this.deleteQuote = this.deleteQuote.bind(this);

  this.state = {quotes: []};
}

// componentDidMount() {
//   axios.get('http://localhost:3000/quotes/')
//   .then(response => {
//     this.setState({ quotes: response.data })
//   })
//   .catch((error) => {
//     console.log(error);
//   })
// }

componentDidMount() {
  axios.get('/quotes')
  .then(response => {
    this.setState({ quotes: response.data })
  })
  .catch((error) => {
    console.log(error);
  })
}

// deleteQuote(id) {
//   axios.delete('http://localhost:3000/quotes/'+id)
//     .then(response => { console.log(response.data)});

    deleteQuote(id) {
      axios.delete('/quotes/'+id)
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
    <div className="App">
      <NavBarItem />
      <CarouselPage/>
      
      <Row>
      
      <Col sm='center'>
      <Card>
      
        <CardBody className= "text-left">
          <CardText>{this.quoteList()}</CardText>
        </CardBody>
      </Card>
      </Col>
      </Row>
      
      

    </div>
  );
}
}

export default Index;