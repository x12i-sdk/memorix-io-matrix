# @x12i/memorix-io-matrix usage example

Derive Object–Property I/O Matrices from Memorix connector and multistep pipeline metadata.

This consuming application demonstrates **derive an input-output matrix from connector metadata** using the published npm package, pinned to `1.1.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Derive an I/O matrix from a connector definition.
- Inspect which properties each multistep pipeline stage reads or produces.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/memorix-io-matrix)
- [Implementation monorepo](https://github.com/x12i/memorix-generic-connectors)
- [Reviewed package source](https://github.com/x12i/memorix-generic-connectors/tree/e8dd8c95a7ccbf7d3aa881086974242e3dcc1e10/packages/memorix-io-matrix)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

The records, callers, inference outputs and backend responses in these examples are synthetic. The example checks a local consumer workflow; no database, semantic model, remote promotion, or real similarity index is contacted. A generated mapping proposal still needs human review before production use.
