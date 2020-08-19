# Theme Directory Tests

_Eventually these steps will be automated, but til then…_

1. Create folders `themes` and `plugins` in the project root.
2. Put the theme you're testing in `themes`, and update the name in `.wp-env.json` (replace 'seedlet').
3. Install dependencies, start the environment
	```
	composer install
	npm install
	npm run wp-env start
	```

PHPCS to catch other code issues

`npm run test:lint`

PHP Unit to run theme checks

`npm run test:unit`

End to end tests for aXe accessibility testing (needs setup, this would be automated)

```
npm run wp-env run tests-cli 'theme activate [theme_name]'
curl -L https://raw.githubusercontent.com/wpaccessibility/a11y-theme-unit-test/master/a11y-theme-unit-test-data.xml > config/a11y-theme-unit-test-data.xml
npm run wp-env run tests-cli 'plugin install wordpress-importer --activate'
npm run wp-env run tests-cli 'import config/a11y-theme-unit-test-data.xml --authors=create --quiet'
npm run test:e2e
```
