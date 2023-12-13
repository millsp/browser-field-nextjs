#!/bin/sh

pnpm next build
echo "irrelevant" > dist/frontend-bundle.js
echo "irrelevant" > dist/backend-bundle.js
cp .next/server/middleware.js dist/middleware-bundle.js
