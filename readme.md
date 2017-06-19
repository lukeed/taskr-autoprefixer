# taskr-autoprefixer [![TravisCI](http://img.shields.io/travis/lukeed/taskr-autoprefixer.svg?style=flat-square)](https://travis-ci.org/lukeed/taskr-autoprefixer) [![npm](https://img.shields.io/npm/v/taskr-autoprefixer.svg?style=flat-square)](https://npmjs.org/package/taskr-autoprefixer)

> PostCSS [Autoprefixer](https://github.com/postcss/autoprefixer) plugin for [Taskr](https://github.com/lukeed/taskr).

This is a merely convenience layer for PostCSS + Autoprefixer.

You may elect to use [`@taskr/postcss`](https://github.com/lukeed/taskr/tree/master/packages/postcss) and `require('autoprefixer')` instead. In fact, you probably _should_ if you're using other PostCSS plugins!

## Install

```sh
npm install --save-dev taskr-autoprefixer
```

## Usage

```js
exports.default = function * (task) {
  yield task.source('src/**/*.sass')
    .sass()
    .autoprefixer({
      browsers: ['last 5 versions']
    })
    .target('dist/css');
}
```

> **Note:** If using a CSS preprocessing tool (eg: SASS, Stylus, LESS), `autoprefixer()` must be invoked _after_ the CSS has been compiled.

## API

### .autoprefixer(options)

This plugin does not have any custom options. Please visit [`autoprefixer` options](https://github.com/postcss/autoprefixer#options) for a full list of available options.


## License

MIT © [Luke Edwards](https://lukeed.com)
