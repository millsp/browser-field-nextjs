# Browser Entrypoint Next.js Investigation

## Running

```sh
pnpm -r install
pnpm -r exec ./snap.sh
```

## How it works

`snap.sh` will build Next.js for the test case at hand and copies the relevant files to `dist` for analysis.

By opening each file, you can clearly see if `browser.js`, `node.js`, or both are included in the final bundles.

