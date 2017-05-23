import Person from '../lib/person';
import chai from 'chai';

var expect = chai.expect;


describe('person', () => {

    it('says hello', () => {
        let p = new Person('Alex');

        var result = p.sayHello();

        expect(result).to.equal('hello Alex');

    });

});