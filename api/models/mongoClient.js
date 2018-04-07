/*
Handling of mongo connections and defining schema for storing the shortened URL's
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/urlShortener');


//  Schema for URL Shortener

mongoose.Promise = global.Promise;

const urlShortenerSchema = Schema({
  original: String,
  shortCode: { type: Number, index: true },
});

urlShortenerSchema.index({ shortCode: 1 });
urlShortenerSchema.set('autoIndex', false);

const URLShortenerModel = mongoose.model('URLShortener', urlShortenerSchema);

module.exports = URLShortenerModel;
