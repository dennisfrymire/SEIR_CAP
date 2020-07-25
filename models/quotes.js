const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    quote: { type: String, required: true },
    author: { type: String, required: true },
    tags: { type: [String], index: true }
}, { timestamps: true });


const Quotes = mongoose.model("Quotes", quoteSchema)

module.exports = Quotes;