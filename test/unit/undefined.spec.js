import chai from 'chai'
import acronym from '../../src/acronym.js'

const expect = chai.expect

export default function () {
	describe('when passed undefined', () => {
		it('should return undefined', () => {
			expect(acronym()).to.not.exist
		})
	})
}
