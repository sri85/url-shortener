
class UrlUtils {
  static isUrlValid(url) {
    const validURLPattern = new RegExp('(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]\\.[^\\s]{2,})');
    return validURLPattern.test(url);
  }
  static isNumber(shortCode) {
    if (!this.isInputValid(shortCode)) {
      return undefined;
    }
    return (typeof (shortCode) === 'number');
  }

  static isInputValid(input) {
    return (input !== null && input !== undefined && input !== '');
  }

  static createUrl(request, shortCode) {
    return `${request.protocol}://${request.hostname}:${this.getPort()}/${shortCode}`;
  }
  static getPort() {
    return process.env.PORT || 8000;
  }
}

module.exports = UrlUtils;
