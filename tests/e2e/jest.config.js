module.exports = {
	...require( '@wordpress/scripts/config/jest-e2e.config' ),
	testTimeout: 10000,
	setupFilesAfterEnv: [
		'@wordpress/jest-console',
		'@wordpress/jest-puppeteer-axe',
		'expect-puppeteer',
	],
};
