'use strict';

const postcss = require('postcss');
const prefixer = require('autoprefixer');

// default config
const browsers = [
	'ie >= 10',
	'ie_mob >= 10',
	'ff >= 30',
	'chrome >= 34',
	'safari >= 7',
	'opera >= 23',
	'ios >= 7',
	'android >= 4.4',
	'bb >= 10'
];

module.exports = {
	every: false,
	name: 'autoprefixer',
	* func(files, opts) {
		opts = Object.assign({ browsers }, opts);
		const ctx = postcss([ prefixer(opts) ]);

		for (const file of files) {
			// process with postcss + prefixer
			const data = yield ctx.process(file.data);
			// update file's content
			file.data = data.css;
		}
	}
};
