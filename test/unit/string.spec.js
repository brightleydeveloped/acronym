import chai from 'chai'
import acronym from '../../src/acronym.js'

const expect = chai.expect

export default function () {
	describe('when passed a string', () => {
		it('should return a string', () => {
			expect(acronym('a')).to.be.a('string')
		})

		it('should match the letters of the word', () => {
			expect(acronym('a').charAt(0)).to.equal('A')
			expect(acronym('f').charAt(0)).to.equal('F')
			expect(acronym('z').charAt(0)).to.equal('Z')

			const npm = acronym('npm')
			const npmArr = npm.split(' ')
			expect(npmArr[0].charAt(0)).to.equal('N')
			expect(npmArr[1].charAt(0)).to.equal('P')
			expect(npmArr[2].charAt(0)).to.equal('M')
		})


		it('should make words capitalized', () => {
			const option = { capitalize: true }

			expect(acronym('a', option).startsWith('A')).to.be.true
			expect(acronym('f', option).startsWith('F')).to.be.true
			expect(acronym('z', option).startsWith('Z')).to.be.true
			expect(acronym('A', option).startsWith('A')).to.be.true
			expect(acronym('F', option).startsWith('F')).to.be.true
			expect(acronym('Z', option).startsWith('Z')).to.be.true

			const npm = acronym('npmNPM', option)
			const npmArr = npm.split(' ')
			expect(npmArr[0].startsWith('N')).to.be.true
			expect(npmArr[1].startsWith('P')).to.be.true
			expect(npmArr[2].startsWith('M')).to.be.true
			expect(npmArr[3].startsWith('N')).to.be.true
			expect(npmArr[4].startsWith('P')).to.be.true
			expect(npmArr[5].startsWith('M')).to.be.true
		})


		it('should make words lower case', () => {
			const option = { capitalize: false }

			expect(acronym('a', option).startsWith('a')).to.be.true
			expect(acronym('f', option).startsWith('f')).to.be.true
			expect(acronym('z', option).startsWith('z')).to.be.true
			expect(acronym('A', option).startsWith('a')).to.be.true
			expect(acronym('F', option).startsWith('f')).to.be.true
			expect(acronym('Z', option).startsWith('z')).to.be.true

			const npm = acronym('npmNPM', option)
			const npmArr = npm.split(' ')
			expect(npmArr[0].startsWith('n')).to.be.true
			expect(npmArr[1].startsWith('p')).to.be.true
			expect(npmArr[2].startsWith('m')).to.be.true
			expect(npmArr[3].startsWith('n')).to.be.true
			expect(npmArr[4].startsWith('p')).to.be.true
			expect(npmArr[5].startsWith('m')).to.be.true
		})


		it ('should use single space as separator', () => {
			const option = { separator: ' ' }

			expect(acronym('npm', option)).to.have.string(' ')
			expect(acronym('a', option)).not.to.have.string(' ')
		})


		it ('should use empty string as separator', () => {
			const option = { separator: '' }

			expect(acronym('npm', option)).not.to.have.string(' ')
			expect(acronym('a', option)).not.to.have.string(' ')
		})


		it ('should use any string as separator', () => {
			// Test some special separators
			const separators = [
				'-',
				'.',
				',',
				'~',
				'&',
				'___',
				'1'
			]

			for (let sep of separators) {
				const option = { separator: sep }

				expect(acronym('npm', option)).to.have.string(sep)
				expect(acronym('npm', option)).not.to.have.string(' ')
				expect(acronym('a', option)).not.to.have.string(sep)
				expect(acronym('a', option)).not.to.have.string(' ')
			}
		})
	})
}
