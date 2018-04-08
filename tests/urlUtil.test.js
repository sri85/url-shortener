/* eslint-disable no-unused-expressions */


const { expect } = require('chai');
const urlUtil = require('../api/urlUtils');

describe('URL Util test suite', () => {
  it('Url returns false  when a number is passed as an input', () => {
    expect(urlUtil.isInputValid(null)).to.equal(false);
  });
  it('Url returns false  when a number is passed as an input', () => {
    expect(urlUtil.isInputValid(undefined)).to.equal(false);
  });
  it('Url returns false  when a NaN is passed as an input', () => {
    expect(urlUtil.isInputValid(NaN)).to.equal(false);
  });
  it('Url returns true when a valid URL is passed as an input', () => {
    expect(urlUtil.isValid('http://google.com')).to.equal(true);
  });
  it('Url returns true when a valid URL is passed as an input', () => {
    expect(urlUtil.isValid('http://www.google.com')).to.equal(true);
  });
  it('Url returns true when a valid URL is passed as an input', () => {
    expect(urlUtil.isValid('www.google.com')).to.equal(true);
  });
  it('Url returns true when a valid URL is passed as an input', () => {
    expect(urlUtil.isValid('www.google.de')).to.equal(true);
  });
  it('Url returns true when a valid URL is passed as an input', () => {
    expect(urlUtil.isValid('https://www.google.pl')).to.equal(true);
  });
});
