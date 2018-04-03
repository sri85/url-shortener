const mongoModel = require('./models/mongoClient');

class URLValidation {
  static isValid(url) {
    console.log(url)
    const validURLPattern = new RegExp('(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]\\.[^\\s]{2,})');
    return validURLPattern.test(url);
  }
  static isDuplicate(url) {
    return mongoModel
      .findOne({ original: url })
      .then(doc => (doc ? doc.id : false));
  }
}

module.exports = URLValidation;
