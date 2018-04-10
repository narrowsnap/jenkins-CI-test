'use strict';

require('babel-polyfill')
import chai from 'chai';
const app = require('../app');
const request = require('supertest').agent(app.listen());

const expect = chai.expect;

describe('first test', () => {
    it('get /', () => {
        request.get('/')
            .expect(200)
            .end((err, res) => {
                expect(res).to.be.an('object')
            })
    })
})