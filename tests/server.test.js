const urlShortener = require('../server');

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);


describe('GET /', () => {
  it('API returns status code 404 when we pass an invalid route', (done) => {
    chai.request(urlShortener)
      .get('/')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
  it('API returns status code 404 when we pass an invalid route', (done) => {
    chai.request(urlShortener)
      .get('/api/new/http://example.com')
      .end((err, res) => {
        res.should.have.status(200);
        // eslint-disable-next-line no-unused-expressions
        expect(res).to.be.json;
        done();
      });
  });
});
