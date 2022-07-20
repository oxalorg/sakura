#!/bin/bash

set -e

echo "Does package.json has the NEXT package version which you want to publish? Rest of the index must be clean"
read -p "Continue? (Y/N): " confirm && [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]] || exit 1

PACKAGE_VERSION=$(cat package.json | grep \\\"version\\\" | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')

# inline replace the version number on the first line only
sed -i "" "1 s/v.*/v$PACKAGE_VERSION/" scss/_main.scss

# rebuild css files with new version number
npm install
npm run scss

git add scss
git add css
git add package.json
git commit -m "Release v$PACKAGE_VERSION"

git tag -a "$PACKAGE_VERSION" -m "Release $PACKAGE_VERSION" && git push --tags

npm publish
