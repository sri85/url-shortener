const timeServer = require('../server');

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);


describe('GET /', () => {
  it('returns status code 200', (done) => {
    chai.request(timeServer)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

