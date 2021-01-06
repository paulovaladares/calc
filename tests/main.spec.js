/* eslint-disable no-unused-expressions */
var expect = require('chai').expect;
var calc = require('../src/main.js');

describe('Calc', function() {
  describe('Smoke tests', function() {
    it('Should have the calc lib', function() {
      expect(calc).to.exist;
    });
    it('Should exist the method sum', function() {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.function;
    });

    it('Should exist the method sub', function() {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.function;
    });

    it('Should exist the method multi', function() {
      expect(calc.multi).to.exist;
      expect(calc.multi).to.be.function;
    });

    it('Should exist the method div', function() {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.function;
    });
  });

  describe('Sum', function() {
    it('Should return 4 when `sum(2, 2)`', function() {
      expect(calc.sum(2, 2)).to.equal(4);
    });
  });

  describe('Sub', function() {
    it('Should return -4 when `sub(6, 10)`', function() {
      expect(calc.sub(6, 10)).to.be.equal(-4);
    });
    it('Should return 4 when `sub(6, 2)`', function() {
      expect(calc.sub(6, 2)).to.be.equal(4, 'Deu erro carai');
    });
  });

  describe('Multi', function() {
    it('Should return 20 when `multi(5, 4)`', function() {
      expect(calc.multi(5, 4)).to.be.equal(20, 'Deu merda!');
    });
  });

  describe('Div', function() {
    context('Success cases', () => {
      it('Should return 6 when `div(12, 2)`', function() {
        expect(calc.div(12, 2)).to.be.equal(6);
      });
      it('Should return 5 when `div(10, 2)`', function() {
        expect(calc.div(10, 2)).to.be.equal(5);
      });
    });
    context('Fail cases', () => {
      it('Should return a erro when `div(12, 0)`', function() {
        expect(calc.div(12, 0)).to.be.equal(Infinity);
      });
    });
  });
});
