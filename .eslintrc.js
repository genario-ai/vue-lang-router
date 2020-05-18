module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'./node_modules/@radek-altof/lint-config/eslint.json',
	],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'vue/html-indent': [ 'error', 'tab' ],
	},
};
