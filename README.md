# acronym


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
console.log(acronym('npm'))
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
console.log(acronym(words))
// => [ 'Wins Unapproved Thrilled',
// =>  'Boring Irresistibile Raptures Disaster',
// =>  'Novel Oversell Outcry Devastated Lack Endorse' ]
```




## License

MIT © Pat Lillis
