'use strict';

const join = require('path').join;
const Taskr = require('taskr');
const test = require('tape');

const dir = join(__dirname, 'fixtures');
const tmp = join(__dirname, 'tmp');

test('taskr-autoprefixer', t => {
	t.plan(5);

	const taskr = new Taskr({
		plugins: [
			require('../'),
			require('@taskr/clear')
		],
		tasks: {
			* foo(f) {
				yield f.source(`${dir}/foo.css`).autoprefixer().target(tmp);
				t.ok('autoprefixer' in taskr.plugins, 'attach `autoprefixer()` plugin to Taskr');
				const str = yield f.$.read(`${tmp}/foo.css`, 'utf8');
				t.true(/-webkit-/i.test(str), 'add appropriate vendor prefixes');
				yield f.clear(tmp);
			},
			*bar(f) {
				yield f.source(`${dir}/*.css`).autoprefixer().target(tmp);
				const arr = yield f.$.expand(`${tmp}/*.css`);
				t.equal(arr.length, 2, 'sends both files to target');
				const str1 = yield f.$.read(`${tmp}/foo.css`, 'utf8');
				t.true(/-webkit-/i.test(str1), 'prefixes first file');
				const str2 = yield f.$.read(`${tmp}/bar.css`, 'utf8');
				t.true(/-ms-flexbox/i.test(str2), 'prefixes second file');
				yield f.clear(tmp);
			}
		}
	});

	taskr.serial(['foo', 'bar']);
});
