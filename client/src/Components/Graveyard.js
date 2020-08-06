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