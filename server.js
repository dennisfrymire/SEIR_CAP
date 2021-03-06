// dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');
const parser = require('body-parser')
const passport = require('./config/passport')();


// env connection
require('dotenv').config();

// environment variables
const app = express();
const atlasURI = process.env.ATLAS_URI || 'https://git.heroku.com/quote-me-mae.git';
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({ extended: false }))// extended: false - does not allow nested objects in query strings
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public')) // we need to tell express to use the public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!
app.use(methodOverride('_method'));
app.use(cors());
app.use(passport.initialize());
app.use(parser.json());

// connect to mongo
mongoose.connect(atlasURI, { useNewUrlParser: true}, () => {
    console.log('internal connection made ', atlasURI);
})

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongo ATLAS connect made");

})

// db messaging
mongoose.connection.on('error', err => console.log(err.message));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));

const quotesController = require('./controllers/quotes.js');
const usersController = require('./controllers/users.js');

// app.use(express.static(`${__dirname}/build`) )
app.use(express.static('public'));

app.use('/quotes', quotesController);
app.use('/users', usersController);

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})


app.listen(PORT, () => {
    console.log('listening on port ', PORT)
})