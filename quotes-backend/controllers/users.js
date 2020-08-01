const router = require('express').Router();
let User = require('../models/user');


const User_Seed = require('../models/user_seed.js');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// User.create(User_Seed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided user data')
// })

User.countDocuments({}, (err, data) => {
  if (err) console.log(err.message)
  console.log(`There are ${data} users in this database`)
})

module.exports = router;