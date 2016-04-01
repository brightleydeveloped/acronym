// returns the path to the word list which is separated by `\n`
import wordListPath from 'word-list'
import fs from 'fs'


// Dictionary of words
// This is indexed by first letter.
// dictionary.a = [ 'apricots', 'always', ...]
const dictionary = {}


// Helper Functions
const isString = (text) => typeof text === 'string'
const isArray = (text) => text instanceof Array
const getWord = (letter) => dictionary[letter][Math.floor(Math.random() * dictionary[letter].length)]


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
function acronym (text, {
	capitalization 	= true,
	separator		= ' ',
	minWordLength	= 1,
	maxWordLength	= undefined
} = { }) {
	if (isString(text)) {
		// Return acronym for this word
		return getWord(text.charAt(0))
	} else if (isArray(text)) {
		// Return acronym for each word in the array.
		return text
	} else {
		// ???
		return undefined
	}
}



// Exports
initialize()
export default acronym
