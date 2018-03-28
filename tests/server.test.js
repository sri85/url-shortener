const timeServer = require('../server');

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);
const {expect} = require('chai');


describe("GET /", () => {
    it("returns status code 200", (done) => {
        chai.request(timeServer)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});


