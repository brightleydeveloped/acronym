import chai from 'chai'
import acronym from '../../src/acronym.js'

const expect = chai.expect;

describe('acronym (unit)', () => {
	it('should be a Function', () => {
		expect(acronym).to.be.a('function')
	})

	describe('when passed a string', () => {
		it('should return a string', () => {
			expect(acronym('a')).to.be.a('string')
		})
	})

	describe('when passed an array', () => {
		it('should return an array', () => {
			expect(acronym(['a'])).to.be.an('array')
		})

		it('of the same size', () => {
			expect(acronym([])).to.have.lengthOf(0)
			expect(acronym(['a'])).to.have.lengthOf(1)
			expect(acronym(['a', 'b'])).to.have.lengthOf(2)
			expect(acronym(['a', 'b', 'c', 'd', 'e', 'f'])).to.have.lengthOf(6)
		})
	})
})