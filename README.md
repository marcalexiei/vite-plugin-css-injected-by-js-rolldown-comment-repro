# vite-plugin-css-injected-by-js rolldown comment repro

With `vite@8.3.5` (rolldown 1.2.x) and `build.minify: false`, `vite-plugin-css-injected-by-js@5.0.2` produces invalid JS:

```
[plugin vite:build-import-analysis] assets/index-Ba43clbn.js:1:0
RolldownError: Parse error @:1:1
1  |  (function() {	// \0vite/all-css	try {		if (typeof document != "undefined") {...
```

`vite@8.1.5` (rolldown 1.1.x) builds fine.

```bash
pnpm install
pnpm build
```

The dynamic import in `src/main.js` is what makes Vite re-parse the chunk and fail.
Without it the build succeeds, but the emitted JS still does not parse.
