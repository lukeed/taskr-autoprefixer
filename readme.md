# taskr-autoprefixer

> Autoprefixer plugin for [Taskr](https://github.com/lukeed/taskr).

[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]

## Install

```sh
npm install --save-dev taskr-autoprefixer
```

## Usage


```js
exports.default = function * (task) {
  yield task.source('src/*.js').autoprefixer().target('dist')
}
```

## API

### .autoprefixer(input, options)

> Check out the [documentation](PLUGIN_DOCUMENTATION) to see the available options.

#### input

Type: `string`<br>
Default: 'foobar'

This is a description.

#### options.foo

Type: `boolean`<br>
Default: `false`

This is a description.


## License

MIT © [Luke Edwards](https://lukeed.com)

[releases]:     https://github.com/lukeed/taskr-autoprefixer/releases
[npm-pkg-link]: https://www.npmjs.org/package/taskr-autoprefixer
[npm-ver-link]: https://img.shields.io/npm/v/taskr-autoprefixer.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/taskr-autoprefixer.svg?style=flat-square
[travis-link]:  https://travis-ci.org/lukeed/taskr-autoprefixer
[travis-badge]: http://img.shields.io/travis/lukeed/taskr-autoprefixer.svg?style=flat-square
