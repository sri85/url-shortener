const urlShortener = require('../server');
const MongodbMemoryServer = require('mongodb-memory-server').default;
const mongoose = require('mongoose');
const { expect } = require('chai');
mongoose.Promise = global.Promise;
let mongoServer;

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);


describe('GET /', () => {
  before((done) => {
    mongoServer = new MongodbMemoryServer({
      instance: {
        port: 27017,
        dbName: 'urlShortener',
      },
    });
    mongoServer.getConnectionString().then((mongoUri) => {
      console.log(mongoUri);
      return mongoose.connect(mongoUri, (err) => {
        if (err) done(err);
      });
    }).then(() => done());
  });

  after(() => {
    mongoose.disconnect();
    mongoServer.stop();
  });

  it('API returns status code 404 when we pass an invalid route', (done) => {

    chai.request(urlShortener)
      .get('/')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
  it('API returns status code 400 when the URL is invalid', (done) => {
    chai.request(urlShortener)
      .get('/api/new/http://')
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
  it('API returns the test shortened URL ', (done) => {
    chai.request(urlShortener)
      .get('/api/new/http://example.com')
      .end((err, res) => {
        expect(res.text).to.equal('{"shortUrl":"http://127.0.0.1:8000/1","originalUrl":"http://example.com"}');
        done();
      });
  });
});
