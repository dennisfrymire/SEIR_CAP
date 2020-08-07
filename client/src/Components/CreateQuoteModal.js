import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { array } from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class NewForm2 extends Component {

constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeQuote = this.onChangeQuote.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      quote: '',
      author: '',
      tags: array,
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

onChangeUsername(e) {
  this.setState({
    username: e.target.value
  })
};

onChangeQuote(e) {
  this.setState({
    quote: e.target.value
  })
};

onChangeAuthor(e) {
  this.setState({
    author: e.target.value
  })
};

onChangeTags(e) {
  this.setState({
    tags: e.target.value
  })
};

onSubmit(e) {
  e.preventDefault();

  const quotePackage = {
    username: this.state.username,
    quote: this.state.quote,
    author: this.state.author,
    tags: this.state.tags
  }

console.log(quotePackage);

axios.post('http://localhost:3000/quotes/add', quotePackage)
      .then(res => console.log(res.data));

window.location = '/';


const QuoteModal = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Add New Quote</ModalHeader>
          <ModalBody>

        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Quote </label>
            <input type="textarea"
                required
                className="form-control"
                value={this.state.quote}
                onChange={this.onChangeQuote}
                />
            
          </div>
          <div className="form-group"> 
            <label>Author</label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.author}
                onChange={this.onChangeAuthor}
                />
          </div>
          <div className="form-group">
            <label>Tags</label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.tags}
                onChange={this.onChangeTags}
                />
          </div>
          
  
          <div className="form-group">
            <input type="submit" value="Add Quote" className="btn btn-primary" />
            <br/>
          </div>
        </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" input type="submit" onClick={toggle}>Add Quote</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
}

  
export default QuoteModal;

// class NewForm extends Component {

//   constructor(props) {
//     super(props);

//     this.onChangeUsername = this.onChangeUsername.bind(this);
//     this.onChangeQuote = this.onChangeQuote.bind(this);
//     this.onChangeAuthor = this.onChangeAuthor.bind(this);
//     this.onChangeTags = this.onChangeTags.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       username: '',
//       quote: '',
//       author: '',
//       tags: array,
//       users: []
//     }
//   }

//   componentDidMount() {
//     axios.get('http://localhost:3000/users/')
//       .then(response => {
//         if (response.data.length > 0) {
//           this.setState({
//             users: response.data.map(user => user.username),
//             username: response.data[0].username
//           })
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       })

//   }

// onChangeUsername(e) {
//   this.setState({
//     username: e.target.value
//   })
// };

// onChangeQuote(e) {
//   this.setState({
//     quote: e.target.value
//   })
// };

// onChangeAuthor(e) {
//   this.setState({
//     author: e.target.value
//   })
// };

// onChangeTags(e) {
//   this.setState({
//     tags: e.target.value
//   })
// };

// onSubmit(e) {
//   e.preventDefault();

//   const quotePackage = {
//     username: this.state.username,
//     quote: this.state.quote,
//     author: this.state.author,
//     tags: this.state.tags
//   }

// console.log(quotePackage);

// axios.post('http://localhost:3000/quotes/add', quotePackage)
//       .then(res => console.log(res.data));

// window.location = '/';


// }
        


//     render() {
//       return (
//       <div className="text-left">
//         <h3>Create New Quote</h3>
//         <form onSubmit={this.onSubmit}>
//           <div className="form-group"> 
//             <label>Quote </label>
//             <input type="textarea"
//                 required
//                 className="form-control"
//                 value={this.state.quote}
//                 onChange={this.onChangeQuote}
//                 />
            
//           </div>
//           <div className="form-group"> 
//             <label>Author</label>
//             <input  type="text"
//                 required
//                 className="form-control"
//                 value={this.state.author}
//                 onChange={this.onChangeAuthor}
//                 />
//           </div>
//           <div className="form-group">
//             <label>Tags</label>
//             <input 
//                 type="text" 
//                 className="form-control"
//                 value={this.state.tags}
//                 onChange={this.onChangeTags}
//                 />
//           </div>
          
  
//           <div className="form-group">
//             <input type="submit" value="Add Quote" className="btn btn-primary" />
//             <br/>
//           </div>
//         </form>
//       </div>
//       )
//     }
//   }
// // render () {
// //   return (
// //     <Form onSubmit={this.onSubmit}>
// //     <FormGroup row>
// //         <Label sm={2}>Quote</Label>
// //         <Col sm={10}>
// //           <Input type="textarea" id="newQuote" placeholder="To be or not to be..."  onChange={this.handleChange}  />
// //         </Col>
// //       </FormGroup>
// //       <FormGroup row>
// //         <Label for="author" sm={2}>Author</Label>
// //         <Col sm={10}>
// //           <Input type="text" name="author" id="newAuthor" onChange={this.handleChange} placeholder="Abraham Lincoln, Anonymous..." />
// //         </Col>
// //       </FormGroup>
// //       <FormGroup row>
// //         <Label for="tags" sm={2}>Tags</Label>
// //         <Col sm={10}>
// //           <Input type="text" name="tags" id="newTags" onChange={this.handleChange} placeholder="Motivation, Love, etc.">
            
// //           </Input>
// //         </Col>
// //       </FormGroup>
      
      
      
// //       <FormGroup check row>
// //         <Col sm={{ size: 10, offset: 2 }}>
// //           <Button>Submit</Button>
// //         </Col>
// //       </FormGroup>
// //     </Form>
// //   );
// // }
// // };



// export default NewForm;