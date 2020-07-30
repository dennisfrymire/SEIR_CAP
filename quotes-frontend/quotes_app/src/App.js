import React, { Component } from 'react';

import Index from "./Components/Index";
import Show from "./Components/Show";
import Edit from "./Components/Edit";
import New from "./Components/New";

import './App.css';


class App extends React.Component {
  render() {
  return (
    <div className="App">
      <h1>Just a test headline</h1>
      <Index/>
      <Show />
      <Edit />
      <New />

      
    </div>
  );
}
}

export default App;
