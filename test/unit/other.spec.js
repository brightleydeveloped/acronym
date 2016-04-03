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
		it('should return a number', () => {
			expect(acronym(0)).to.equal(0)
			expect(acronym(1)).to.equal(1)
			expect(acronym(-17)).to.equal(-17)
			expect(acronym(1.5)).to.equal(1.5)
			expect(acronym(-12.345)).to.equal(-12.345)
		})
	})
}
