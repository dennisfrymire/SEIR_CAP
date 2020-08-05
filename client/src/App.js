import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import QuotesList from "./Components/Index";
import EditQuote from "./Components/Edit";
import CreateQuote from "./Components/New";
import CreateUser from "./Components/CreateUser";
import About from "./Components/About";
import NewUser from "./Components/NewUser";
import SignUpForm from "./Components/SignUpForm";

import './App.css';
import New from './Components/New';


class App extends React.Component {
  render() {
  return (
    <Router>
      <div className="container">
      <Route path="/" exact component={QuotesList} />
      {/* <Route path="/" exact component={ShowQuote} /> */}
      <Route path="/signup" exact component={SignUpForm}/>
      {/* <New/>
      <NewUser/> */}
      <Route path="/update/:id" exact component={EditQuote} />
      <Route path="/Components/New" exact component={CreateQuote} />
      <Route path="/user" exact component={CreateUser} />
      <About />
      </div>
    </Router>
    
  );
}
}

export default App;
