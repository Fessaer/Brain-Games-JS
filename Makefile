install: 
	npm install
        npm install eslint --save-dev
	npm install --save eslint-config-airbnb
	npm install eslint-plugin-import --save-dev

start:
      npx node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
     npx eslint .
