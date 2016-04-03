import chai from 'chai'
import acronym from '../../src/acronym.js'

// Nest all test suites
import testString from './string.spec.js'
import testArray from './array.spec.js'
import testOther from './other.spec.js'

const expect = chai.expect

describe('acronym (unit)', () => {
	it('should be a Function', () => {
		expect(acronym).to.be.a('function')
	})

	testString()
	testArray()
	testOther()
})
