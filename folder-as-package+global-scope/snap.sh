#!/bin/sh

pnpm next build
cp .next/static/chunks/pages/index*.js dist/frontend-bundle.js
cp .next/server/pages/index*.js dist/backend-bundle.js
echo "irrelevant" > dist/middleware-bundle.js
