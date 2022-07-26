# Contributing to sakura

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

## Getting started

1. Fork the repository
2. Clone the forked repository `git clone https://github.com/<user>/sakura.git`
3. Install dependencies `npm install`
4. Run `npm run scss:watch`
5. Make your changes
6. Preview them with the Vite app (see section: Running the Preview)
7. Make sure to test on Chrome and Firefox both
8. Submit a PR with a description of your changes

## Scripts

* `npm run bookmarklet` - minify bookmarklet source code and prepare it to embedded as a bookmark
* `npm run scss` - generate css files from scss source files
* `npm run scss:watch` - watch for changes in scss source files and generate css files accordingly
* `npm run build` - generate js and css files
* `npm run test` - run a server to load test.html file in browser

## Running the Preview

This project uses Vercel to automate previews for each change, but you can
preview locally, too. To do this, in the `vercel/` directory, run `npm install` and `npm run dev`.

This preview includes hot module replacement so that you do *not* need to re-run or refresh the
preview. It will listen to any change made to the CSS (which will be updated by
`npm run scss:watch`) and reload any styles automatically.
