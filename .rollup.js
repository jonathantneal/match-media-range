export default {
	entry: 'index.js',
	dest: 'index.dist.js',
	sourceMap: 'index.dist.js.map',
	moduleName: 'window.matchMedia',
	format: 'iife',
	useStrict: false,
	plugins: [
		require('rollup-plugin-node-resolve')(),
		require('rollup-plugin-commonjs')({
			include: 'node_modules/**'
		}),
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
		require('rollup-plugin-uglify')()
	]
};




