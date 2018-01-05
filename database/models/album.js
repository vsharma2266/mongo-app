const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaObject = {
    title: String,
    date: Date,
    copiesSold: Number,
    numberTracks: Number,
    image: String,
    revenue: Number
}

module.exports =  new Schema(schemaObject);;