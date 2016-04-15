import chai from 'chai'
import acronym from '../../src/acronym.js'

const expect = chai.expect

export default function () {
	describe('when passed undefined', () => {
		it('should return undefined', () => {
			expect(acronym()).to.not.exist
		})
	})

	describe('when passed a number', () => {
		it('should return undefined', () => {
			expect(acronym(0)).to.not.exist
			expect(acronym(1)).to.not.exist
			expect(acronym(-17)).to.not.exist
			expect(acronym(1.5)).to.not.exist
			expect(acronym(-12.345)).to.not.exist
		})
	})
}
