# Contributing to sakura

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

## Getting started

1. Fork the repository
2. Clone the forked repository `git clone https://github.com/<user>/sakura.git`
3. Install dependencies `npm install`
4. Run `npm run scss:watch` and `npm run test`
5. Make your changes -> Check them out at localhost:8080/test.html
6. Make sure to test on Chrome and Firefox both
7. Submit a PR with a description of your changes

## Scripts

* `npm run bookmarklet` - minify bookmarklet source code and prepare it to embedded as a bookmark
* `npm run scss` - generate css files from scss source files
* `npm run scss:watch` - watch for changes in scss source files and generate css files accordingly
* `npm run build` - generate js and css files
* `npm run test` - run a server to load test.html file in browser
