// Login / Register components

//   constructor () {
//     super()

//     this.state = {
//       email: '',
//       password: '',
//       isLoggedIn: false
//     }

//     this.handleLogOut = this.handleLogOut.bind(this)
//     this.handleInput = this.handleInput.bind(this)
//     this.handleLogIn = this.handleLogIn.bind(this)
//     this.handleSignUp = this.handleSignUp.bind(this)
//   }

//   componentDidMount () {
//     if (localStorage.token) {
//       this.setState({
//         isLoggedIn: true
//       })
//     } else {
//       this.setState({
//         isLoggedIn: false
//       })
//     }
//   }

//   handleLogOut () {
//     this.setState({
//       email: '',
//       password: '',
//       isLoggedIn: false
//     })
//     localStorage.clear()
//   }


//   handleInput (e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }

// handleSignUp(e) {
//       e.preventDefault()
//       axios.post('http://localhost:3000/users/signup', {
//           email: this.state.email,
//           password: this.state.password
//         })
//           .then(response => {
//               localStorage.token = response.data.token
//               this.setState({
//                   isLoggedIn: true
//               })
//           })
//           .catch(err => console.log(err))
//   }

//   handleLogIn (e) {
//     e.preventDefault()
//     axios.post('http://localhost:3000/users/login', {
//         email: this.state.email,
//         password: this.state.password
//       })
//         .then(response => {
//             localStorage.token = response.data.token
//             this.setState({
//               isLoggedIn: true
//             })
//         })
//         .catch(err => console.log(err))
//   }

  // render () {
  //   return (
  //     <Container className="themed-container" fluid={true}>
  //       <NavBar />
  //       <div className='body'>
  //       <CarouselPage/>
//           /* <Switch>
//             <Route path='/signup'
//               render={(props) => {
//                 return (
//                   <SignUpForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />
//                 )
//               }}
//             />
//             <Route path='/logout'
//               render={(props) => {
//                 return (
//                   <LogOutForm isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />
//                 )
//               }}
//             />
//             <Route path='/login'
//               render={(props) => {
//                 return (
//                   <LogInForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />
//                 )
//               }}
//             />
//             <Route
//               path='/'
//               render={() => {
//                 return (
                  
//                   <Index isLoggedIn={this.state.isLoggedIn} />
//                 )
//               }}
//             />
//           </Switch>
//         </div>
//       </Container>
//     )
//   }

// ****************
// Edit Page Scraps
// ****************

// axios.get('http://localhost:3000/users/')
      // .then(response => {
      //   if (response.data.length > 0) {
      //     this.setState({
      //       users: response.data.map(user => user.username),
      //     })
      //   }
      // })
      // .catch((error) => {
      //   console.log(error);
      // })

  

    // onChangeUsername(e) {
    //   this.setState({
    //     username: e.target.value
    //   })
    // };

    // handleChange = (event) => {
// const updateInput = Object.assign( this.state.formInputs, { [event.target.id]: event.target.value })
// this.setState(updateInput)
// }
      
//       handleSubmit = (event) =>{
//         event.preventDefault()
//         fetch('http://localhost:3000/quotes', {
//           body: JSON.stringify(this.state.formInputs),
//           method: 'POST',
//        headers: {
//          'Accept': 'application/json, text/plain, */*',
//          'Content-Type': 'application/json'
//        }
//       })
//        .then(createdQuote => {
//          return createdQuote.json()
//        })
      
//        .then(jsonedQuote => {
//          // reset the form
//          this.setState({
//            formInputs: {
//              title: '',
//              quote: '',
//              author: '',
//              tags: ['']
//             },
//            quotes: [jsonedQuote, ...this.state.quotes]
//          })
//        })
//        .catch(error => console.log(error))
//       }
      
//        componentDidMount() {
//         this.getQuotes()
//       }
      
//       getQuotes = () =>{
//         fetch('http://localhost:3000/quotes')
//           .then(response => response.json())
//           .then(json => this.setState({quotes: json}))
//           .catch(error => console.error(error))
//       }

    // constructor(props) {
    //     super(props);
    //     this.state({
    //         formInputs: {
    //         quote: '',
    //         author: '',
    //         tags: ['']
    //     };
    
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }
    
    //   handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }
    
    //   handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    //   }


    // state = {
    //     quote: '',
    //     author: '',
    //     tags: ['']
    // }

    // handleChange = (event) => {
    //     // setState is a built-in method of the React library
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     })
    // }

    // handleSubmit = (event, newFormState) => {
    //     event.preventDefault();
        
    //     console.log(newFormState)
    //     fetch('/quotes', {
    //         body: JSON.stringify(newFormState),
    //         method: "POST",
    //         headers: {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(response => response.json())
    //         .then(newQuote => {
    //             console.log(newQuote)
    //             this.setState({
    //                 userQuotes: [...this.state.userQuotes, newQuote],
                    

    //             })
    //         })
    // }

    // clearForm = () => {
    //     this.setState({
    //     quote: '',
    //     author: '',
    //     tags: ['']
    //     })
    // }

    // {(ev) => this.props.handleSubmit(ev, this.state, this.clearForm())}


    {/* <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div> */}

        // render () {
//   return (
//     <Form onSubmit={this.onSubmit}>
//     <FormGroup row>
//         <Label sm={2}>Quote</Label>
//         <Col sm={10}>
//           <Input type="textarea" id="newQuote" placeholder="To be or not to be..."  onChange={this.handleChange}  />
//         </Col>
//       </FormGroup>
//       <FormGroup row>
//         <Label for="author" sm={2}>Author</Label>
//         <Col sm={10}>
//           <Input type="text" name="author" id="newAuthor" onChange={this.handleChange} placeholder="Abraham Lincoln, Anonymous..." />
//         </Col>
//       </FormGroup>
//       <FormGroup row>
//         <Label for="tags" sm={2}>Tags</Label>
//         <Col sm={10}>
//           <Input type="text" name="tags" id="newTags" onChange={this.handleChange} placeholder="Motivation, Love, etc.">
            
//           </Input>
//         </Col>
//       </FormGroup>
      
      
      
//       <FormGroup check row>
//         <Col sm={{ size: 10, offset: 2 }}>
//           <Button>Submit</Button>
//         </Col>
//       </FormGroup>
//     </Form>
//   );
// }
// };

// axios.get('http://localhost:3000/users/')
      // .then(response => {
      //   if (response.data.length > 0) {
      //     this.setState({
      //       users: response.data.map(user => user.username),
      //     })
      //   }
      // })
      // .catch((error) => {
      //   console.log(error);
      // })

      // onChangeUsername(e) {
//   this.setState({
//     username: e.target.value
//   })
// };

// ****************
// NewForm
// ****************

// handleChange = (event) => {
// const updateInput = Object.assign( this.state.formInputs, { [event.target.id]: event.target.value })
// this.setState(updateInput)
// }
      
//       handleSubmit = (event) =>{
//         event.preventDefault()
//         fetch('http://localhost:3000/quotes', {
//           body: JSON.stringify(this.state.formInputs),
//           method: 'POST',
//        headers: {
//          'Accept': 'application/json, text/plain, */*',
//          'Content-Type': 'application/json'
//        }
//       })
//        .then(createdQuote => {
//          return createdQuote.json()
//        })
      
//        .then(jsonedQuote => {
//          // reset the form
//          this.setState({
//            formInputs: {
//              title: '',
//              quote: '',
//              author: '',
//              tags: ['']
//             },
//            quotes: [jsonedQuote, ...this.state.quotes]
//          })
//        })
//        .catch(error => console.log(error))
//       }
      
//        componentDidMount() {
//         this.getQuotes()
//       }
      
//       getQuotes = () =>{
//         fetch('http://localhost:3000/quotes')
//           .then(response => response.json())
//           .then(json => this.setState({quotes: json}))
//           .catch(error => console.error(error))
//       }

    // constructor(props) {
    //     super(props);
    //     this.state({
    //         formInputs: {
    //         quote: '',
    //         author: '',
    //         tags: ['']
    //     };
    
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }
    
    //   handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }
    
    //   handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    //   }


    // state = {
    //     quote: '',
    //     author: '',
    //     tags: ['']
    // }

    // handleChange = (event) => {
    //     // setState is a built-in method of the React library
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     })
    // }

    // handleSubmit = (event, newFormState) => {
    //     event.preventDefault();
        
    //     console.log(newFormState)
    //     fetch('/quotes', {
    //         body: JSON.stringify(newFormState),
    //         method: "POST",
    //         headers: {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(response => response.json())
    //         .then(newQuote => {
    //             console.log(newQuote)
    //             this.setState({
    //                 userQuotes: [...this.state.userQuotes, newQuote],
                    

    //             })
    //         })
    // }

    // clearForm = () => {
    //     this.setState({
    //     quote: '',
    //     author: '',
    //     tags: ['']
    //     })
    // }

    // {(ev) => this.props.handleSubmit(ev, this.state, this.clearForm())}

    // render () {
//   return (
//     <Form onSubmit={this.onSubmit}>
//     <FormGroup row>
//         <Label sm={2}>Quote</Label>
//         <Col sm={10}>
//           <Input type="textarea" id="newQuote" placeholder="To be or not to be..."  onChange={this.handleChange}  />
//         </Col>
//       </FormGroup>
//       <FormGroup row>
//         <Label for="author" sm={2}>Author</Label>
//         <Col sm={10}>
//           <Input type="text" name="author" id="newAuthor" onChange={this.handleChange} placeholder="Abraham Lincoln, Anonymous..." />
//         </Col>
//       </FormGroup>
//       <FormGroup row>
//         <Label for="tags" sm={2}>Tags</Label>
//         <Col sm={10}>
//           <Input type="text" name="tags" id="newTags" onChange={this.handleChange} placeholder="Motivation, Love, etc.">
            
//           </Input>
//         </Col>
//       </FormGroup>
      
      
      
//       <FormGroup check row>
//         <Col sm={{ size: 10, offset: 2 }}>
//           <Button>Submit</Button>
//         </Col>
//       </FormGroup>
//     </Form>
//   );
// }
// };

// *************
// EditForm
// *************

{/* <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div> */}

        // render () {
//   return (
//     <Form onSubmit={this.onSubmit}>
//     <FormGroup row>
//         <Label sm={2}>Quote</Label>
//         <Col sm={10}>
//           <Input type="textarea" id="newQuote" placeholder="To be or not to be..."  onChange={this.handleChange}  />
//         </Col>
//       </FormGroup>
//       <FormGroup row>
//         <Label for="author" sm={2}>Author</Label>
//         <Col sm={10}>
//           <Input type="text" name="author" id="newAuthor" onChange={this.handleChange} placeholder="Abraham Lincoln, Anonymous..." />
//         </Col>
//       </FormGroup>
//       <FormGroup row>
//         <Label for="tags" sm={2}>Tags</Label>
//         <Col sm={10}>
//           <Input type="text" name="tags" id="newTags" onChange={this.handleChange} placeholder="Motivation, Love, etc.">
            
//           </Input>
//         </Col>
//       </FormGroup>
      
      
      
//       <FormGroup check row>
//         <Col sm={{ size: 10, offset: 2 }}>
//           <Button>Submit</Button>
//         </Col>
//       </FormGroup>
//     </Form>
//   );
// }
// };

// ************
// NewForm
// ************

// import React, { Component } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import { array } from 'prop-types';

// import './Carousel.css';

// class NewForm extends Component {

//   constructor(props) {
//     super(props);

//     this.onChangeUsername = this.onChangeUsername.bind(this);
//     this.onChangeQuote = this.onChangeQuote.bind(this);
//     this.onChangeAuthor = this.onChangeAuthor.bind(this);
//     this.onChangeTags = this.onChangeTags.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       // username: '',
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
//     // username: this.state.username,
//     quote: this.state.quote,
//     author: this.state.author,
//     tags: this.state.tags
//   }

// axios.post('http://localhost:3000/quotes/add', quotePackage)
//       .then(res => console.log(res.data));

// window.location = '/';


// }
// render() {
//   return (
//       <div className="text-left headline">
//         <h3>Add New Quote</h3>
//         <form onSubmit={this.onSubmit}>
//           <div className="form-group main-text"> 
//             <label>Quote </label>
//             <input type="textarea"
//                 required
//                 className="form-control"
//                 value={this.state.quote}
//                 onChange={this.onChangeQuote}
//                 />
            
//           </div>
//           <div className="form-group main-text"> 
//             <label>Author</label>
//             <input  type="text"
//                 required
//                 className="form-control"
//                 value={this.state.author}
//                 onChange={this.onChangeAuthor}
//                 />
//           </div>
//           <div className="form-group main-text">
//             <label>Tags</label>
//             <input 
//                 type="text" 
//                 className="form-control"
//                 value={this.state.tags}
//                 onChange={this.onChangeTags}
//                 />
//           </div>
          
  
//           <div className="form-group headline">
//             <input type="submit" value="Add Quote" className="btn btn-outline-secondary" />
//             <br/>
//           </div>
//         </form>
//       </div>
//       )
//     }
//   }

// export default NewForm;
