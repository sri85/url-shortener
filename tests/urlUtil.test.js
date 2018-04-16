/* eslint-disable no-unused-expressions */


const { expect } = require('chai');
const urlUtil = require('../api/urlUtils');

describe('URL Util test suite', () => {
  it('isInputValid returns false  when a number is passed as an input', () => {
    expect(urlUtil.isInputValid(null)).to.equal(false);
  });
  it('isInputValid returns false when undefined is passed as an input', () => {
    expect(urlUtil.isInputValid(undefined)).to.equal(false);
  });
  it('isInputValid returns false when an empty string is passed as an input', () => {
    expect(urlUtil.isInputValid('')).to.equal(false);
  });
  it('Url returns true when a valid URL is passed as an input', () => {
    expect(urlUtil.isUrlValid('http://google.com')).to.equal(true);
  });
  it('Url returns true when a valid URL is passed as an input', () => {
    expect(urlUtil.isUrlValid('http://www.google.com')).to.equal(true);
  });
  it('Url returns true when a valid URL is passed as an input', () => {
    expect(urlUtil.isUrlValid('www.google.com')).to.equal(true);
  });
  it('Url returns true when a valid URL is passed as an input', () => {
    expect(urlUtil.isUrlValid('www.google.de')).to.equal(true);
  });
  it('Url returns true when a valid URL is passed as an input', () => {
    expect(urlUtil.isUrlValid('https://www.google.pl')).to.equal(true);
  });
  it('IsNumber returns true when a we pass a number', () => {
    expect(urlUtil.isNumber(123)).to.equal(true);
  });
  it('IsNumber returns false when a we pass a null', () => {
    expect(urlUtil.isNumber(null)).to.equal(undefined);
  });
  it('IsNumber returns false when a we pass an undefined', () => {
    expect(urlUtil.isNumber(undefined)).to.equal(undefined);
  });
  it('IsNumber returns true when a we pass a number in quotes', () => {
    expect(urlUtil.isNumber('1')).to.equal(false);
  });
  it('IsNumber returns true when a we pass an empty string', () => {
    expect(urlUtil.isNumber('')).to.equal(undefined);
  });
  it('CreateUrl formats the URL when we do not pass ', () => {
    // Mocking requests
    const req = {};
    req.protocol = 'https';
    req.hostname = 'example.com';
    expect(urlUtil.createUrl(req, '1')).to.equal('https://example.com:8000/1');
  });
  it('CreateUrl formats the URL when we pass a custom port ', () => {
    // Mocking requests
    const req = {};
    req.protocol = 'http';
    req.hostname = 'example.com';
    process.env.PORT = '3000';
    expect(urlUtil.createUrl(req, '1')).to.equal('http://example.com:3000/1');
  });
  it('CreateUrl formats the URL when we pass a custom port ', () => {
    // Mocking requests
    const req = {};
    req.protocol = 'http';
    req.hostname = 'www.example.com';
    req.port = '3000';
    expect(urlUtil.createUrl(req, '1')).to.equal('http://www.example.com:3000/1');
  });
  it('CreateUrl formats the URL when we pass a custom port ', () => {
    // Mocking requests
    const req = {};
    req.protocol = 'http';
    req.hostname = 'example.com';
    req.port = '3000';
    expect(urlUtil.createUrl(req, '')).to.equal('http://example.com:3000/');
  });
});
