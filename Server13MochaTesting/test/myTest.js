var app = require('../app');
var agent = require('supertest-as-promised')(app);

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);


describe('First test', function(){
    it('should go to index (using supertest)', function(done){
        agent
            .get('/')
            .expect(200)
            .end(done);
    });

    it('should go to index (using supertest) --- version 2', function(done){
        agent
            .get('/')
            .expect(200, done);
    });

    it('should not find the page (using supertest-as-promised)', function(done){
        agent
            .get('/gbeqwigbq')
            .expect(404)
            .then(function(res){
                "works".should.equal("works");
                "not works".should.not.equal("works");
            })
            .done(done);
    });
});