import acronym from '../src/acronym.js'


const tests = [
	['npm'],
	'a.b.c',
	'Test',
	'a'
];


const options = [
	{ },
	{ capitalize: false },
	{ capitalize: false, separator: '-' },
	{ capitalize: false, separator: '--' },
	{ capitalize: true, separator: ', ' }
];

for (let o of options) {
	console.log('//', o);

	for (let t of tests) {
		const result = acronym(t, o)
		console.log(`${t}\t=> ${result}`)
	}

	console.log();
}