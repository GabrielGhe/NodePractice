//var app = require('../app');
var agent = require('supertest-as-promised');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.should();
chai.use(chaiAsPromised);


describe('First test', function(){
    it('should go to index', function(){
        agent
            .get('http://localhost:3000')
            .expect(200);
    });
});