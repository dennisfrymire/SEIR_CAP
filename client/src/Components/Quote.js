import React from 'react';
import {Link} from 'react-router-dom';
import { Card, CardText, CardBody,Container, Row, Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function QuoteItem ({quote}) {
    return(
<Row>
<Col>
<Card>
  <CardBody>
    <CardText className="quote index text-left">{quote.quote}</CardText>
    <CardText className= "text-right author">- {quote.author}</CardText>
    <Link to={"/update/"+quote._id}>edit</Link> | <Link to="#" onClick={() => { props.deleteQuote(quote._id) }}>delete</Link>
    {/* <input type="submit" value="Add Quote" className="btn btn-outline-secondary" /> */}
  </CardBody>
</Card>
</Col>
</Row>
    )
}

