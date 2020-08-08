import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./Components/NavBar";
import CarouselPage from "./Components/Carousel";
import Index from "./Components/Index";
import EditQuote from "./Components/Edit";
import CreateQuote from "./Components/New";
import About from "./Components/About";
import Footer from "./Components/Footer";

export default class App extends Component {

render() {
  return (
    <div className="container">
      <Router>
        <NavBar path="/" component={NavBar}/>
        <CarouselPage path ="/" component={CarouselPage}/> 
        <Route exact path="/" component={Index}/>
        <Route path="/update/:id" exact component={EditQuote} />
        <Route exact path="/add" component={CreateQuote}/>
        <Route exact path="/Components/About" component={About}/>
        <Footer path="/" component={Footer}/>
      </Router>
    
  </div>
  )};
};
