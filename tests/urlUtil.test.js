/* eslint-disable no-unused-expressions */


const { expect } = require('chai');
const urlUtil = require('../api/urlUtils');

describe('URL Util test suite', () => {
  it('Url returns false  when a number is passed as an input', () => {
    expect(urlUtil.isInputInvalid(null)).to.equal(false);
  });
  it('Url returns false  when a number is passed as an input', () => {
    expect(urlUtil.isInputInvalid(undefined)).to.equal(false);
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
  it('IsNumber returns true when a we pass a number', () => {
    expect(urlUtil.isNumber(123)).to.equal(true);
  });
  it('IsNumber returns false when a we pass a null', () => {
    expect(urlUtil.isNumber(null)).to.equal(false);
  });
  it('IsNumber returns true when a we pass a number', () => {
    expect(urlUtil.isNumber(undefined)).to.equal(false);
  });
  it('IsNumber returns true when a we pass a number', () => {
    expect(urlUtil.isNumber(undefined)).to.equal(false);
  });
  it('IsNumber returns true when a we pass a number', () => {
    expect(urlUtil.isNumber('')).to.equal(false);
  });
  it('IsNumber returns true when a we pass a number', () => {
    expect(urlUtil.isNumber('123')).to.equal(false);
  });
  it('CreateUrl formats the URL', () => {
    expect(urlUtil.createUrl('123')).to.equal(false);
  });

});
