import fs from 'fs'

// returns the path to the word list which is separated by `\n`
import wordListPath from 'word-list'

const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n')

var alphabet = 'abcdefghijklmnopqrstuvwxyz'
var dictionary = {}

for (let i = 0; i < alphabet.length; i++) {
	dictionary[alphabet.charAt(i)] = []
}

for (let i = 0; i < wordArray.length; i++) {
	dictionary[wordArray[i].charAt(0)].push(wordArray[i])
}

function acronym (text) {
	if (isString(text)) {
		return text
	} else if (isArray(text)) {
		return text
	} else {
		return undefined
	}
}


const isString = (text) => typeof text === 'string'
const isArray = (text) => text instanceof Array

export default acronym
