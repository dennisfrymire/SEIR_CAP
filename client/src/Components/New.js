import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NewForm from './NewForm';

class New extends Component {

  render() {
  return (
    <div className="App">
      <NewForm />
    </div>
  );
}
}

export default New;