# acronym

This fork uses a different set of words.  The words used in PatLillis/more-words are depressing and have a couple cusswords.

[![Build Status](https://travis-ci.org/patlillis/acronym.svg?branch=master)](https://travis-ci.org/PatLillis/acronym)
[![Test Coverage](https://codeclimate.com/github/PatLillis/acronym/badges/coverage.svg)](https://codeclimate.com/github/PatLillis/acronym/coverage)


> Generate your very own acronyms!

Use it for generating version tags, committee designations, or even band names!

Uses [more-words](https://github.com/patlillis/more-words).


## Install

```
$ npm install --save acronym
```



## Usage

Generate acronym from a string:
```js
import acronym from 'acronym'
acronym('npm')
// => 'Nice Promise Mistakes'
```


Generate acronym from an array of strings:
```js
import acronym from 'acronym'
const words = [
  'wut',
  'bird',
  'noodle'
];
acronym(words)
// => [ 'Wins Unapproved Thrilled',
// =>  'Boring Irresistibile Raptures Disaster',
// =>  'Novel Oversell Outcry Devastated Lack Endorse' ]
```

## Options

Pass in options via a second parameter to the `acronym()` function

### capitalize

Determines wether the first letter of each word in the acronym will be capital. Default is `true`.

```js
import acronym from 'acronym'
const options = {
  capitalize: true
}
acronym('npm', options)
// => 'No Pleasure Misbehaving'
```

```js
import acronym from 'acronym'
const options = {
  capitalize: false
}
acronym('npm', options)
// => 'no profiteer misreporting'
```


### separator

Determines the string between each word in the acronyn. Default is a single space.

```js
import acronym from 'acronym'
const options = {
  separator: ', '
}
acronym('npm', options)
// => 'Nasty, Preventing, Mocked'
```

```js
import acronym from 'acronym'
const options = {
  separator: '-',
  capitalize: false
}
acronym('npm', options)
// => 'needy-positive-mercy'
```





## License

MIT © Pat Lillis
