const express = require('express');
const router = express.Router();



// model
const Quotes = require('../models/quotes.js');
const Quotes_Seed = require('../models/quotes_seed.js');

router.route('/').get((req, res) => {
    Quotes.find()
      .then(quotes => res.json(quotes))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/add').post((req, res) => {
    // const username = req.body.username;
    const quote = req.body.quote;
    const author = req.body.author;
    const tags = req.body.tags;
  
    const newQuote = new Quotes({
      // username,
      quote,
      author,
      tags,
    });
  
    newQuote.save()
    .then(() => res.json('Quote added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').get((req, res) => {
    Quotes.findById(req.params.id)
      .then(quote => res.json(quote))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Quotes.findByIdAndDelete(req.params.id)
      .then(() => res.json('Quote deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Quotes.findById(req.params.id)
      .then(quote => {
        quote.username = req.body.username;
        quote.quote = req.body.quote;
        quote.author = req.body.author;
        quote.tags = req.body.tags;
  
        quote.save()
          .then(() => res.json('Quote updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

// router.get('/', (req, res) => {
//     Quotes.find({}, (err, foundQuotes) => {
//         res.json(foundQuotes)
//     })
// })

// router.get('/:id', (req, res) => {
//     Quotes.findById(req.params.id, (err, foundQuote) => {
//         res.json(foundQuote);
//     })
// })

// router.post('/', (req, res) => {
//     Quotes.create(req.body, (err, createdQuote) => {
//         //req.body.strDrinkThumb ==='' ? req.body.strDrinkThumb = 'https://clipartart.com/images/clipart-martini-4.jpg' : req.body.strDrinkThumb = req.body.strDrinkThumb
//         res.json(createdQuote);
//     })
// })

// router.delete('/:id', (req, res) => {
//     Quotes.findByIdAndDelete(req.params.id, (err, deletedQuote) => {
//         res.json(deletedQuote);
//     })
// })

// Quotes.create(Quotes_Seed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided quote data')
// })

Quotes.countDocuments({}, (err, data) => {
    if (err) console.log(err.message)
    console.log(`There are ${data} quotes in this database`)
  })

// router.put('/:id', (req, res) => {
//     Quotes.findByIdAndUpdate(req.params.id, req.body, (err, updatedQuote) => {
//         res.json(updatedQuote);
//     })
// })


module.exports = router;