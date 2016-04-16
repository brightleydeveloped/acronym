import acronym from '../src/acronym.js'

const option = { capitalize: true }

console.log(acronym('a', option))
console.log(acronym('f', option))
console.log(acronym('z', option))
console.log(acronym('A', option))
console.log(acronym('F', option))
console.log(acronym('Z', option))

const npm = acronym('npmNPM', option)
console.log(npm);