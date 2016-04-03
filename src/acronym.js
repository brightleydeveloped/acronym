// returns the path to the word list which is separated by `\n`
import wordListPath from 'word-list'
import fs from 'fs'
import capitalize from 'lodash.capitalize'
import lowercase from 'lodash.lowercase'
import defaults from 'lodash.defaults'


// Dictionary of words
// This is indexed by first letter.
// dictionary.a = [ 'apricots', 'always', ...]
const dictionary = {}


// Helper Functions
const isString = (text) => typeof text === 'string'
const isArray = (text) => text instanceof Array
const getWord = (letter) => (isAlpha(letter) ? (dictionary[letter][Math.floor(Math.random() * dictionary[letter].length)]) : letter)
const isAlpha = (letter) => /^[a-zA-Z]+$/g.test(letter)

// Set up the dictionary of words using word-list
function initialize () {
	const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n')
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'

	// Empty array for each letter
	for (let i = 0; i < alphabet.length; i++) {
		dictionary[alphabet.charAt(i)] = []
	}

	// Put all the words into the right spot.
	for (let i = 0; i < wordArray.length; i++) {
		dictionary[wordArray[i].charAt(0)].push(wordArray[i])
	}
}


// Main function
function acronym (text, options) {
	var actual = defaults(options || {}, {
		capitalize: true,
		separator: ' '
	})

	if (isString(text)) {
		// Return acronym for this word
		return processWord(text, actual)
	} else if (isArray(text)) {
		// Return acronym for each word in the array.
		return text.map((el) => {
			if (isString(el))
				return processWord(el, actual)
			else
				return el
		})
	} else {
		// ???
		return text
	}
}


function processWord (text, options) {
	// Split word into array of characters
	let arr = text.split('')

	// Transform each character into a whole word
	arr = arr.map((letter) => getWord(letter.toLowerCase()))

	// Correctly capitalize
	if (options.capitalize) {
		arr = arr.map((word) => isAlpha(word) ? capitalize(word) : word)
	} else {
		arr = arr.map((word) => isAlpha(word) ? lowercase(word) : word)
	}

	// Re-join using separator, but only join adjacent words.
	// Otherwise, spit out cahracters verbatim
	let result = ''

	for (let i = 0; i < arr.length; i++) {
		result += arr[i]

		// Add separator?
		if (i !== arr.length - 1 && (isAlpha(arr[i]) || isAlpha(arr[i + 1]))) {
			result += options.separator
		}
	}

	return result
}


// Exports
initialize()
export default acronym
