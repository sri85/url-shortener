const mongoModel = require('./models/mongoClient');

class URLValidation {
  static isValid(url) {
    const validURLPattern = new RegExp('(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]\\.[^\\s]{2,})');
    return validURLPattern.test(url);
  }
  static getUrl(shortCode) {
    if (this.isInputValid(shortCode)) {
      return mongoModel
        .findOne({ original: shortCode })
        .then(doc => (doc ? doc.id : false));
    }
    return undefined;
  }
  static isNumber(shortCode) {
    if (this.isInputValid(shortCode)) {
      const pattern = new RegExp('^\\d+$');
      return pattern.test(shortCode);
    }
    return undefined;
  }

  static isInputValid(input) {
    return input !== null || input !== undefined || !input.isNaN();
  }
}

module.exports = URLValidation;
