
class URLUtils {
  static isValid(url) {
    const validURLPattern = new RegExp('(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]\\.[^\\s]{2,})');
    return validURLPattern.test(url);
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

  static createUrl(request, url) {
    return `${request.protocol}://${request.hostname}:${this.getPort()}/${url}`;
  }
  static getPort() {
    return process.env.PORT || 8000;
  }
}

module.exports = URLUtils;
