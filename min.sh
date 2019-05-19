#!/bin/bash
## TODO rewrite in node.js for cross platform support
set -e
set -o pipefail
mkdir -p min
ls css | xargs -I {} npx cleancss -o "min/{}" "css/{}"
