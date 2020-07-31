const router = require('express').Router();
const express = require('express');
const router = express.Router();



// model
const Quotes = require('../models/quotes.js');
const Quotes_Seed = require('../models/quotes_seed.js');

router.get('/', (req, res) => {
    Quotes.find({}, (err, foundQuotes) => {
        res.json(foundQuotes)
    })
})

// router.get('/communitySearch', (req, res) => {
//     Cocktails.find({}, (err, foundCommunityCocktails) => {
//         res.json(foundCommunityCocktails);
//     })
// })

router.get('/:id', (req, res) => {
    Quotes.findById(req.params.id, (err, foundQuote) => {
        res.json(foundQuote);
    })
})

router.post('/', (req, res) => {
    Quotes.create(req.body, (err, createdQuote) => {
        //req.body.strDrinkThumb ==='' ? req.body.strDrinkThumb = 'https://clipartart.com/images/clipart-martini-4.jpg' : req.body.strDrinkThumb = req.body.strDrinkThumb
        res.json(createdQuote);
    })
})

router.delete('/:id', (req, res) => {
    Quotes.findByIdAndDelete(req.params.id, (err, deletedQuote) => {
        res.json(deletedQuote);
    })
})

// Quotes.create(Quotes_Seed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided quote data')
// })

// Quotes.deleteMany({}, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('dropped database')
// })

Quotes.countDocuments({}, (err, data) => {
    if (err) console.log(err.message)
    console.log(`There are ${data} quotes in this database`)
  })

router.put('/:id', (req, res) => {
    Quotes.findByIdAndUpdate(req.params.id, req.body, (err, updatedQuote) => {
        res.json(updatedQuote);
    })
})


module.exports = router;