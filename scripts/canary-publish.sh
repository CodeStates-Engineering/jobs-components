#!/usr/bin/env bash
pkg_version=`node -e "console.log(require('./package.json').version.split('-')[0])"`
git_commit_sha=`git rev-parse --short HEAD`


npm run version $pkg_version-$git_commit_sha

# npx npm@7 run deploy --workspaces -- --tag canary
npm run deploy:package -- --tag canary