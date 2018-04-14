# Diograph Receipt App

## Usage / Development

```
npm install -g npx
npm install
npm start
```
Then go to: http://localhost:4205/


## Tests

```
npm test
```

## Deploy

```
npx webpack
cp app/index.html dist/index.html
# Change "../dist/bundle.js" to "bundle.js" in dist/index.html
surge ./dist diograph-receipt-app.surge.sh
```
