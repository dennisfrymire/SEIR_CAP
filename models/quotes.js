const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    quote: { type: String, required: true },
    author: { type: String, required: true },
    tags: { type: [Array] }
}, { timestamps: true });


const Quote = mongoose.model("Quote", quoteSchema)

module.exports = Quote;