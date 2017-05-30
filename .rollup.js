export default {
	entry: 'match-media-range.js',
	dest: 'match-media-range.es5.js',
	sourceMap: 'match-media-range.es5.js.map',
	moduleName: 'matchMedia',
	format: 'iife',
	useStrict: false,
	footer: 'window.matchMedia=matchMedia',
	plugins: [
		require('rollup-plugin-babel')({
			babelrc: false,
			presets: [
				[
					require('babel-preset-env'),
					{
						modules: false
					}
				]
			]
		}),
		require('rollup-plugin-uglify')({
			keep_fnames: true
		})
	]
};
