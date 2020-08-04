// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios'

// import QuotesList from "./Components/Index";
// import EditQuote from "./Components/Edit";
// import CreateQuote from "./Components/New";
// import About from "./Components/About";
// import SignUpForm from "./Components/SignUpForm";
// import LogInForm from "./Components/LogInForm";
// import LogOutForm from "./Components/LogOutForm";

// import './App.css';
// import New from './Components/New';




// class App extends Component {

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
//       axios.post('/signup', {
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
//     axios.post('/login', {
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
//   render() {
//   return (
//     <Router>
//       <div className="container">
//       <QuotesList />
//       <New/>
//       {/* <Route path="/update/:id" exact component={EditQuote} /> */}
//       <Route path="/Components/New" exact component={CreateQuote} />
//       {/* <Route path="/user" exact component={CreateUser} /> */}
//       <Route path="/signup" exact component= {SignUpForm} />
//       <LogInForm />
//       <LogOutForm />
//       <About />
//       </div>
//     </Router>
    
//   );
// }
// }

// export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import QuotesList from "./Components/Index";
import ShowQuote from "./Components/Show";
import EditQuote from "./Components/Edit";
import CreateQuote from "./Components/New";
import CreateUser from "./Components/CreateUser";
import About from "./Components/About";
import NewUser from "./Components/NewUser";

import './App.css';
import New from './Components/New';


class App extends React.Component {
  render() {
  return (
    <Router>
      <div className="container">
      <Route path="/" exact component={QuotesList} />
      {/* <Route path="/" exact component={ShowQuote} /> */}
      <New/>
      <NewUser/>
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