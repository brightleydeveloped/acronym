import chai from 'chai'
import acronym from '../../src/acronym.js'

const expect = chai.expect

export default function () {
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
}
