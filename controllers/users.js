const express = require('express')
const router = require('express').Router();
const jwt = require('jwt-simple')
const passport = require('../config/passport')
const config = require('../config/config')
const mongoose = require('../models/user')
let User = mongoose.model('User');

const User_Seed = require('../models/user_seed.js');

router.post('/signup', (req, res) => {
  if (req.body.email && req.body.password) {
      let newUser = {
          email: req.body.email,
          password: req.body.password
      }
      User.findOne({email: req.body.email})
          .then((user) => {
              if (!user) {
                  User.create(newUser)
                      .then(user => {
                          if (user) {
                              var payload = {
                                  id: newUser.id
                              }
                              var token = jwt.encode(payload, config.jwtSecret)
                              res.json({
                                  token: token
                              })
                          } else {
                              
                              res.sendStatus(401)
                          }
                      })
              } else {
                  
                  res.sendStatus(401)
              }
          })
  } else {
      
      res.sendStatus(401)
  }
})

router.post('/login', (req, res) => {
  if (req.body.email && req.body.password) {
  User.findOne({email: req.body.email}).then(user => {
      if (user) {
          if (user.password === req.body.password) {
              var payload = {
                  id: user.id
              }
              var token = jwt.encode(payload, config.jwtSecret)
              res.json({
                  token: token
              })
          } else {
              res.sendStatus(401)
          }
      } else {
          res.sendStatus(401)
      }
  })
  } else {
      res.sendStatus(401)
  }
})

// router.route('/').get((req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//   const username = req.body.username;

//   const newUser = new User({username});

//   newUser.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// User.create(User_Seed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided user data')
// })

User.countDocuments({}, (err, data) => {
  if (err) console.log(err.message)
  console.log(`There are ${data} users in this database`)
})

module.exports = router;