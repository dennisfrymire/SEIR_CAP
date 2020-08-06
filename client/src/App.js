import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./Components/NavBar";
import CarouselPage from "./Components/Carousel";
import Index from "./Components/Index";
import EditQuote from "./Components/Edit";
import CreateQuote from "./Components/New";
import CreateUser from "./Components/CreateUser";
import About from "./Components/About";
import NewUser from "./Components/NewUser";
import SignUpForm from "./Components/SignUpForm";
import LogInForm from "./Components/LogInForm";
import LogOutForm from "./Components/LogOutForm";

import './App.css';
import New from './Components/New';


class App extends React.Component {


  render() {
  return (
    <div className="container">
    
      <NavBar />
      <CarouselPage/> 
      
      
      {/* <Route path="/" exact component={ShowQuote} /> */}
      {/* <Route path="/signup" exact component={SignUpForm}/> */}
      {/* <New/>
      <NewUser/> */}
      <Router>

        <Route path="/" exact component={Index}/>

        <Route path="/update/:id" exact component={EditQuote} />
      
        <Route exact path="/add" component={CreateQuote}/>
      
        {/* <Route path="/user" exact component={CreateUser} /> */}
      
        <Route exact path="/Components/About" component={About}/>

      </Router>
      </div>
    
    
  );
}
}


export default App;
