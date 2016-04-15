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



		it('should match the letters of the word', () => {
			const arr = acronym(['a', 'f', 'z'])
			expect(arr[0].charAt(0)).to.equal('A')
			expect(arr[1].charAt(0)).to.equal('F')
			expect(arr[2].charAt(0)).to.equal('Z')

			const result = acronym(['npm', 'xyz', 'test'])

			const npmArr = result[0].split(' ')
			expect(npmArr[0].charAt(0)).to.equal('N')
			expect(npmArr[1].charAt(0)).to.equal('P')
			expect(npmArr[2].charAt(0)).to.equal('M')

			const xyzArr = result[1].split(' ')
			expect(xyzArr[0].charAt(0)).to.equal('X')
			expect(xyzArr[1].charAt(0)).to.equal('Y')
			expect(xyzArr[2].charAt(0)).to.equal('Z')

			const testArr = result[2].split(' ')
			expect(testArr[0].charAt(0)).to.equal('T')
			expect(testArr[1].charAt(0)).to.equal('E')
			expect(testArr[2].charAt(0)).to.equal('S')
			expect(testArr[3].charAt(0)).to.equal('T')
		})


		it('should make words capitalized', () => {
			const option = { capitalize: true }

			const result = acronym(['afz', 'AFZ', 'npmNPM'], option)

			const afzArr1 = result[0].split(' ')
			expect(afzArr1[0].charAt(0)).to.equal('A')
			expect(afzArr1[1].charAt(0)).to.equal('F')
			expect(afzArr1[2].charAt(0)).to.equal('Z')

			const afzArr2 = result[1].split(' ')
			expect(afzArr2[0].charAt(0)).to.equal('A')
			expect(afzArr2[1].charAt(0)).to.equal('F')
			expect(afzArr2[2].charAt(0)).to.equal('Z')

			const npmArr = result[2].split(' ')
			expect(npmArr[0].charAt(0)).to.equal('N')
			expect(npmArr[1].charAt(0)).to.equal('P')
			expect(npmArr[2].charAt(0)).to.equal('M')
			expect(npmArr[3].charAt(0)).to.equal('N')
			expect(npmArr[4].charAt(0)).to.equal('P')
			expect(npmArr[5].charAt(0)).to.equal('M')
		})


		it('should make words lower case', () => {
			const option = { capitalize: false }

			const result = acronym(['afz', 'AFZ', 'npmNPM'], option)

			const afzArr1 = result[0].split(' ')
			expect(afzArr1[0].charAt(0)).to.equal('a')
			expect(afzArr1[1].charAt(0)).to.equal('f')
			expect(afzArr1[2].charAt(0)).to.equal('z')

			const afzArr2 = result[1].split(' ')
			expect(afzArr2[0].charAt(0)).to.equal('a')
			expect(afzArr2[1].charAt(0)).to.equal('f')
			expect(afzArr2[2].charAt(0)).to.equal('z')

			const npmArr = result[2].split(' ')
			expect(npmArr[0].charAt(0)).to.equal('n')
			expect(npmArr[1].charAt(0)).to.equal('p')
			expect(npmArr[2].charAt(0)).to.equal('m')
			expect(npmArr[3].charAt(0)).to.equal('n')
			expect(npmArr[4].charAt(0)).to.equal('p')
			expect(npmArr[5].charAt(0)).to.equal('m')
		})


		it('should use single space as separator', () => {
			const option = { separator: ' ' }

			const result = acronym(['npm', '1', 'a'], option)

			expect(result[0].match(/ /g) || []).to.have.length(2)
			expect(result[1].match(/ /g) || []).to.have.length(0)
			expect(result[2].match(/ /g) || []).to.have.length(0)
		})


		it('should use empty string as separator', () => {
			const option = { separator: '' }

			const result = acronym(['npm', '1', 'a'], option)

			expect(result[0]).not.to.have.string(' ')
			expect(result[1]).not.to.have.string(' ')
			expect(result[2]).not.to.have.string(' ')
		})


		it('should use any string as separator', () => {
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
				let re = new RegExp(sep, "g")

				//Make sure we escape necessary charaters
				if (sep === '.')
					re = new RegExp('\\' + sep, 'g')

				const result = acronym(['npm', 'a'], option);

				expect(result[0].match(re) || []).to.have.length(2)
				expect(result[0]).not.to.have.string(' ')
				expect(result[1].match(re) || []).to.have.length(0)
				expect(result[1]).not.to.have.string(' ')
			}
		})


		it('should skip over non-alpha characters', () => {
			expect(acronym(['n.p.m'])[0].match(/\./g) || []).to.have.length(2)

			const cap = [
				true,
				false
			]

			// Test some special separators
			const separators = [
				'-',
				'--',
				',',
				'~',
				'&',
				'___',
				'1'
			]

			for (let c of cap) {
				for (let sep of separators) {
					const option = { separator: sep, capitalize: c }
					let sepRe = new RegExp(sep, "g")
					let wordRe = /\./g;

					//Make sure we escape necessary charaters
					if (sep === '.')
						sepRe = new RegExp('\\' + sep, 'g')

					const result = acronym(['n.p.m', 'a'], option);

					expect(result[0].match(sepRe) || []).to.have.length(4)
					expect(result[0].match(wordRe) || []).to.have.length(2)
					expect(result[0]).not.to.have.string(' ')
					expect(result[1].match(sepRe) || []).to.have.length(0)
					expect(result[1].match(wordRe) || []).to.have.length(0)
					expect(result[1]).not.to.have.string(' ')
				}
			}
		})

		it('should not use separator for consecutive non-alpha characters', () => {
			expect(acronym(['n.?.p.?.m'])[0].match(/ /g) || []).to.have.length(4)

			const cap = [
				true,
				false
			]

			// Test some special separators
			const separators = [
				'-',
				'--',
				',',
				'~',
				'&',
				'___',
				'1'
			]

			for (let c of cap) {
				for (let sep of separators) {
					const option = { separator: sep, capitalize: c }
					let sepRe = new RegExp(sep, "g")
					let wordRe = /\./g;

					//Make sure we escape necessary charaters
					if (sep === '.')
						sepRe = new RegExp('\\' + sep, 'g')

					const result = acronym(['n.?.p.?.m', 'a'], option)

					expect(result[0].match(sepRe) || []).to.have.length(4)
					expect(result[0]).not.to.have.string(' ')
					expect(result[1].match(sepRe) || []).to.have.length(0)
					expect(result[1]).not.to.have.string(' ')
				}
			}
		})

		it('should replace non-strings with undefined', () => {
			const result = acronym(['npm', 1.5, undefined, ['npm']])

			expect(result[0]).to.be.a('string')
			expect(result[1]).to.not.exist
			expect(result[2]).to.not.exist
			expect(result[3]).to.not.exist
		})
	})
}
