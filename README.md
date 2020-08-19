# Theme Directory Tests

Put theme in `themes` folder (this step will be automated, eventually). Update theme location in `.wp-env.json`.

```
npm install
npm run wp-env start
```

PHPCS to catch other code issues

`npm run test:lint`

PHP Unit to run theme checks

`npm run test:unit`

