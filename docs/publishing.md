# Publishing to NPM

### New automated way

* Open `package.json`, up the version number
* Make sure nothing else is changed in the working tree
* Run `npm run release`

### Manual OLD way

I'll mostly be doing this manually, but I keep forgetting the steps.

* Make sure you're logged in using `npm login` 
* Update `CHANGELOG.md` file
* Change version numbers in the following files
  - `scss/_main.css`
  - `package.json`
* Make sure to build css files again `npm run scss` so that they have the updated version numbers
* Publish `npm publish`
* `git tag -a $VERSION -m "Release $VERSION"`
* `git push --tags`

