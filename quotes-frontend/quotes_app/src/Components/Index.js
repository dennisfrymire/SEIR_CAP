import React, {Component} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import CarouselPage from "./Carousel";
import NavBarItem from "./NavBar";

const Quote = props => (
  
  
  <Card>
  <CardBody>
    <CardText>{props.quote.quote}</CardText>
    <CardText>{props.quote.author}</CardText>
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

componentDidMount() {
  axios.get('http://localhost:3000/quotes/')
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
    <div className="App">
      <NavBarItem />
      <CarouselPage/>
      <Row>
      <Col sm='4'>
    
      <Card className='m-3'>
        
        <CardBody className="text-center">
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