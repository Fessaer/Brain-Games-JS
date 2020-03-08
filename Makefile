install: npm install
	 npm install --save eslint-config-airbnb

start:
	npx node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
