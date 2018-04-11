'use strict';

require('babel-polyfill')
import chai from 'chai';
const app = require('../app');
const request = require('supertest').agent(app.listen());

const expect = chai.expect;

describe('加法函数的测试', function() {
    it('1 加 1 应该等于 2', function() {
        expect(1 + 1).to.be.equal(2);
    });
});


/*describe('first test', () => {
    it('result should be 2', (done) => {
        expect(1+1).to.be.equal(2)
        done()
    })
    it('get /', () => {
        request.get('/')
            .expect(200)
            .end((err, res) => {
                expect(res).to.be.an('object')
            })
    })
})*/
