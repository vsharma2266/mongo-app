const mongoose = require('mongoose');
const AlbumSchema = require('./album');
const Schema = mongoose.Schema;

const schemaObject = {
    name: { type: String, index: true },
    age: Number,
    yearsActive: Number,
    image: String,
    genre: String,
    website: String,
    netWorth: Number,
    labelname: String,
    retired: Boolean,
    albums: [ AlbumSchema ]
}


const ArtistSchema = new Schema(schemaObject);
ArtistSchema.index({ name: 1 });
const artist = mongoose.model('artist', ArtistSchema);

module.exports = artist;