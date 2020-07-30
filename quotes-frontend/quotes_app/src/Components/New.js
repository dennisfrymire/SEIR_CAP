import React, { Component } from 'react';
import NewForm from './NewForm';

class New extends React.Component {

  render() {
  return (
    <div className="App">
      <h2>New Quote</h2>
      <NewForm />
    </div>
  );
}
}

export default New;