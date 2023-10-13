import { expect } from 'chai';
import { evaluate } from './evaluate.js';

describe('evalogic', () => {
  describe('Single value', () => {
    it('should evaluate "0" to false', () => {
      expect(evaluate('0')).to.be.false;
    });

    it('should evaluate "1" to true', () => {
      expect(evaluate('1')).to.be.true;
    });

    it('should evaluate "(0)" to false', () => {
      expect(evaluate('(0)')).to.be.false;
    });

    it('should evaluate "(1)" to true', () => {
      expect(evaluate('(1)')).to.be.true;
    });
  });

  describe('2-value OR expression', () => {
    it('should evaluate "0|0" to false', () => {
      expect(evaluate('0|0')).to.be.false;
    });

    it('should evaluate "0|1" to true', () => {
      expect(evaluate('0|1')).to.be.true;
    });

    it('should evaluate "1|0" to true', () => {
      expect(evaluate('1|0')).to.be.true;
    });

    it('should evaluate "1|1" to true', () => {
      expect(evaluate('1|1')).to.be.true;
    });
  });

  describe('2-value AND expression', () => {
    it('should evaluate "0&0" to false', () => {
      expect(evaluate('0&0')).to.be.false;
    });

    it('should evaluate "0&1" to false', () => {
      expect(evaluate('0&1')).to.be.false;
    });

    it('should evaluate "1&0" to false', () => {
      expect(evaluate('1&0')).to.be.false;
    });

    it('should evaluate "1&1" to true', () => {
      expect(evaluate('1&1')).to.be.true;
    });
  });

  describe('3-value OR expression', () => {
    it('should evaluate "0|0|0" to false', () => {
      expect(evaluate('0|0|0')).to.be.false;
    });

    it('should evaluate "0|0|1" to true', () => {
      expect(evaluate('0|0|1')).to.be.true;
    });

    it('should evaluate "0|1|0" to true', () => {
      expect(evaluate('0|1|0')).to.be.true;
    });

    it('should evaluate "0|1|1" to true', () => {
      expect(evaluate('0|1|1')).to.be.true;
    });

    it('should evaluate "1|0|0" to true', () => {
      expect(evaluate('1|0|0')).to.be.true;
    });

    it('should evaluate "1|0|1" to true', () => {
      expect(evaluate('1|0|1')).to.be.true;
    });

    it('should evaluate "1|1|0" to true', () => {
      expect(evaluate('1|1|0')).to.be.true;
    });

    it('should evaluate "1|1|1" to true', () => {
      expect(evaluate('1|1|1')).to.be.true;
    });
  });

  describe('3-value AND expression', () => {
    it('should evaluate "0&0&0" to false', () => {
      expect(evaluate('0&0&0')).to.be.false;
    });

    it('should evaluate "0&0&1" to false', () => {
      expect(evaluate('0&0&1')).to.be.false;
    });

    it('should evaluate "0&1&0" to false', () => {
      expect(evaluate('0&1&0')).to.be.false;
    });

    it('should evaluate "0&1&1" to false', () => {
      expect(evaluate('0&1&1')).to.be.false;
    });

    it('should evaluate "1&0&0" to false', () => {
      expect(evaluate('1&0&0')).to.be.false;
    });

    it('should evaluate "1&0&1" to false', () => {
      expect(evaluate('1&0&1')).to.be.false;
    });

    it('should evaluate "1&1&0" to false', () => {
      expect(evaluate('1&1&0')).to.be.false;
    });

    it('should evaluate "1&1&1" to true', () => {
      expect(evaluate('1&1&1')).to.be.true;
    });
  });

  describe('3-value mixed OR and AND expression', () => {
    it('should evaluate "0|0&0" to false', () => {
      expect(evaluate('0|0&0')).to.be.false;
    });

    it('should evaluate "0|0&1" to false', () => {
      expect(evaluate('0|0&1')).to.be.false;
    });

    it('should evaluate "0|1&0" to false', () => {
      expect(evaluate('0|1&0')).to.be.false;
    });

    it('should evaluate "0|1&1" to true', () => {
      expect(evaluate('0|1&1')).to.be.true;
    });

    it('should evaluate "1|0&0" to true', () => {
      expect(evaluate('1|0&0')).to.be.true;
    });

    it('should evaluate "1|0&1" to true', () => {
      expect(evaluate('1|0&1')).to.be.true;
    });

    it('should evaluate "1|1&0" to true', () => {
      expect(evaluate('1|1&0')).to.be.true;
    });

    it('should evaluate "1|1&1" to true', () => {
      expect(evaluate('1|1&1')).to.be.true;
    });

    it('should evaluate "0&0|0" to false', () => {
      expect(evaluate('0&0|0')).to.be.false;
    });

    it('should evaluate "0&0|1" to true', () => {
      expect(evaluate('0&0|1')).to.be.true;
    });

    it('should evaluate "0&1|0" to false', () => {
      expect(evaluate('0&1|0')).to.be.false;
    });

    it('should evaluate "0&1|1" to true', () => {
      expect(evaluate('0&1|1')).to.be.true;
    });

    it('should evaluate "1&0|0" to false', () => {
      expect(evaluate('1&0|0')).to.be.false;
    });

    it('should evaluate "1&0|1" to true', () => {
      expect(evaluate('1&0|1')).to.be.true;
    });

    it('should evaluate "1&1|0" to true', () => {
      expect(evaluate('1&1|0')).to.be.true;
    });

    it('should evaluate "1&1|1" to true', () => {
      expect(evaluate('1&1|1')).to.be.true;
    });
  });

  describe('4-value mixed OR and AND expression', () => {
    it('should evaluate "0|0&0|0" to false', () => {
      expect(evaluate('0|0&0|0')).to.be.false;
    });

    it('should evaluate "0|0&1|0" to false', () => {
      expect(evaluate('0|0&1|0')).to.be.false;
    });

    it('should evaluate "0|1&0|0" to false', () => {
      expect(evaluate('0|1&0|0')).to.be.false;
    });

    it('should evaluate "0|1&1|0" to true', () => {
      expect(evaluate('0|1&1|0')).to.be.true;
    });

    it('should evaluate "1|0&0|0" to true', () => {
      expect(evaluate('1|0&0|0')).to.be.true;
    });

    it('should evaluate "1|0&1|0" to true', () => {
      expect(evaluate('1|0&1|0')).to.be.true;
    });

    it('should evaluate "1|1&0|0" to true', () => {
      expect(evaluate('1|1&0|0')).to.be.true;
    });

    it('should evaluate "1|1&1|0" to true', () => {
      expect(evaluate('1|1&1|0')).to.be.true;
    });

    it('should evaluate "0&0|0|0" to false', () => {
      expect(evaluate('0&0|0|0')).to.be.false;
    });

    it('should evaluate "0&0|1|0" to true', () => {
      expect(evaluate('0&0|1|0')).to.be.true;
    });

    it('should evaluate "0&1|0|0" to false', () => {
      expect(evaluate('0&1|0|0')).to.be.false;
    });

    it('should evaluate "0&1|1|0" to true', () => {
      expect(evaluate('0&1|1|0')).to.be.true;
    });

    it('should evaluate "1&0|0|0" to false', () => {
      expect(evaluate('1&0|0|0')).to.be.false;
    });

    it('should evaluate "1&0|1|0" to true', () => {
      expect(evaluate('1&0|1|0')).to.be.true;
    });

    it('should evaluate "1&1|0|0" to true', () => {
      expect(evaluate('1&1|0|0')).to.be.true;
    });

    it('should evaluate "1&1|1|0" to true', () => {
      expect(evaluate('1&1|1|0')).to.be.true;
    });

    it('should evaluate "0|0&0&1" to false', () => {
      expect(evaluate('0|0&0&1')).to.be.false;
    });

    it('should evaluate "0|0&1&1" to false', () => {
      expect(evaluate('0|0&1&1')).to.be.false;
    });

    it('should evaluate "0|1&0&1" to false', () => {
      expect(evaluate('0|1&0&1')).to.be.false;
    });

    it('should evaluate "0|1&1&1" to true', () => {
      expect(evaluate('0|1&1&1')).to.be.true;
    });

    it('should evaluate "1|0&0&1" to true', () => {
      expect(evaluate('1|0&0&1')).to.be.true;
    });

    it('should evaluate "1|0&1&1" to true', () => {
      expect(evaluate('1|0&1&1')).to.be.true;
    });

    it('should evaluate "1|1&0&1" to true', () => {
      expect(evaluate('1|1&0&1')).to.be.true;
    });

    it('should evaluate "1|1&1&1" to true', () => {
      expect(evaluate('1|1&1&1')).to.be.true;
    });

    it('should evaluate "0&0|0&1" to false', () => {
      expect(evaluate('0&0|0&1')).to.be.false;
    });

    it('should evaluate "0&0|1&1" to true', () => {
      expect(evaluate('0&0|1&1')).to.be.true;
    });

    it('should evaluate "0&1|0&1" to false', () => {
      expect(evaluate('0&1|0&1')).to.be.false;
    });

    it('should evaluate "0&1|1&1" to true', () => {
      expect(evaluate('0&1|1&1')).to.be.true;
    });

    it('should evaluate "1&0|0&1" to false', () => {
      expect(evaluate('1&0|0&1')).to.be.false;
    });

    it('should evaluate "1&0|1&1" to true', () => {
      expect(evaluate('1&0|1&1')).to.be.true;
    });

    it('should evaluate "1&1|0&1" to true', () => {
      expect(evaluate('1&1|0&1')).to.be.true;
    });

    it('should evaluate "1&1|1&1" to true', () => {
      expect(evaluate('1&1|1&1')).to.be.true;
    });
  });

  describe('with parenthesis', () => {
    it('should evaluate "(0|0)" to false', () => {
      expect(evaluate('(0|0)')).to.be.false;
    });

    it('should evaluate "(0|0|0)" to false', () => {
      expect(evaluate('(0|0|0)')).to.be.false;
    });

    it('should evaluate "(0&0)" to false', () => {
      expect(evaluate('(0&0)')).to.be.false;
    });

    it('should evaluate "(0&1&1)" to false', () => {
      expect(evaluate('(0&1&1)')).to.be.false;
    });

    it('should evaluate "(0&1&1&0)" to false', () => {
      expect(evaluate('(0&1&1&0)')).to.be.false;
    });

    it('should evaluate "(0&1)|(1&1)" to true', () => {
      expect(evaluate('(0&1)|(1&1)')).to.be.true;
    });

    it('should evaluate "(0&1)|(1&1)&(0&1)" to false', () => {
      expect(evaluate('(0&1)|(1&1)&(0&1)')).to.be.false;
    });

    it('should evaluate "(1&1)|(1&1)&(0&1)&(0&0)|(1|1)" to true', () => {
      expect(evaluate('(1&1)|(1&1)&(0&1)&(0&0)|(1|1)')).to.be.true;
    });

    it('should evaluate "((1&1)&(1&0))&(1|0)" to false', () => {
      expect(evaluate('((1&1)&(1&0))&(1|0)')).to.be.false;
    });

    it('should evaluate "(((1&1)|(1|0&1))&(1&0))&(1|0)" to false', () => {
      expect(evaluate('((1&1)&(1&0))&(1|0)')).to.be.false;
    });

    it('should evaluate "((1&(0|1))|0)&(1)" to true', () => {
      expect(evaluate('((1&(0|1))|0)&(1)')).to.be.true;
    });

    it('should evaluate "(0)|(1)" to true', () => {
      expect(evaluate('(0)|(1)')).to.be.true;
    });
  });

  describe('invalid expression', () => {
    it('should evaluate "(0|0" to error', () => {
      expect(() => evaluate('(0|0')).to.throw('Invalid logic expression');
    });

    it('should evaluate "()" to error', () => {
      expect(() => evaluate('()')).to.throw('Invalid logic expression');
    });

    it('should evaluate ")0|0(" to error', () => {
      expect(() => evaluate(')0|0(')).to.throw('Invalid logic expression');
    });

    it('should evaluate "&0&0" to error', () => {
      expect(() => evaluate('&0&0')).to.throw('Invalid logic expression');
    });

    it('should evaluate "0&0&" to error', () => {
      expect(() => evaluate('0&0&')).to.throw('Invalid logic expression');
    });

    it('should evaluate "0&&0" to error', () => {
      expect(() => evaluate('0&&0')).to.throw('Invalid logic expression');
    });

    it('should evaluate "(0)(1)" to error', () => {
      expect(() => evaluate('(0)(1)')).to.throw('Invalid logic expression');
    });
  });

  describe('with NOT operator', () => {
    it('should evaluate "!0" to true', () => {
      expect(evaluate('!0')).to.be.true;
    });

    it('should evaluate "!1" to false', () => {
      expect(evaluate('!1')).to.be.false;
    });

    it('should evaluate "!(0)" to true', () => {
      expect(evaluate('!(0)')).to.be.true;
    });

    it('should evaluate "!(1)" to false', () => {
      expect(evaluate('!(1)')).to.be.false;
    });

    it('should evaluate "(!0)" to true', () => {
      expect(evaluate('(!0)')).to.be.true;
    });

    it('should evaluate "(!1)" to false', () => {
      expect(evaluate('(!1)')).to.be.false;
    });

    it('should evaluate "(!0)|!1" to true', () => {
      expect(evaluate('(!0)|!1')).to.be.true;
    });

    it('should evaluate "(!1)&(!0|1)" to false', () => {
      expect(evaluate('(!1)&(!0|1)')).to.be.false;
    });

    it('should evaluate "(!1|!0&(!0&1|(!1)))&(!0|1)" to true', () => {
      expect(evaluate('(!1|!0&(!0&1|(!1)))&(!0|1)')).to.be.true;
    });

    it('should evaluate "(!0&0&1)" to false', () => {
      expect(evaluate('(!0&0&1)')).to.be.false;
    });
  });
});
