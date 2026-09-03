# Changelog

All notable changes to the "JavaScript Code Snippet" extension are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Each entry lists only the headline change per release — see git history/tags for full detail.

## [1.2.1] - 2026-09-03

- Publish extension to Open VSX Registry alongside the VS Code Marketplace
- Update CI workflow to build the VSIX package once and reuse it across both marketplaces

## [1.2.0] - 2026-09-03

- Unify packaging and publishing scripts to `vsce:package` and `vsce:publish`
- Update GitHub Actions CI workflow to use `pnpm run vsce:publish`

## [1.1.2] - 2026-09-02

- No snippet changes.
- Snippets now ship as a single `.code-snippets` file, each declaring its own languages; which snippet reaches which language is unchanged
- `engines.vscode` raised to `^1.100.0`

## [1.1.1] - 2026-08-26

- Fixed the Marketplace badges

## [1.1.0] - 2026-08-25

- Added TypeScript-only snippets — interfaces, type aliases, generics, utility types, type narrowing/guards, mapped & conditional types, standard decorators, class modifiers, assertions, and ambient declarations — loaded only for `.ts`/`.tsx`, never `.js`/`.jsx`/`.vue`
- Added a `ts.*` namespace-prefix family for the larger TypeScript API surfaces (`ts.utility.*`, `ts.decorator.*`, ...), following the existing prefix-design philosophy
- Deliberately excluded `enum` — TypeScript's `erasableSyntaxOnly` direction and community consensus favor `as const` object literals instead
- Reworked `main.js` to fail the build on duplicate snippet names (not just duplicate prefixes) and to build two separate output files (`javascript.json`, `typescript.json`)
- Added `prettier`/`nodemon` dev tooling (`pnpm run format`, `pnpm run dev`)

## [1.0.0] - 2026-08-24

- Added ES2016–ES2026 language feature snippets (optional chaining, nullish coalescing, logical assignment, class static blocks, top-level `await`, array copy methods, Iterator Helpers, Set methods, `Array.fromAsync`, `Math.sumPrecise`, and more)
- Added two new snippet files: `resource-management.json` (`using`/`await using`) and `typed-array.json` (`ArrayBuffer`/TypedArrays/`DataView`)
- Added `import.*`/`export.*` namespace-triggered prefixes alongside existing short mnemonics
- Fixed ~24 duplicate/colliding snippet prefixes found via an automated scan, plus a broken placeholder in the "while iteration decrementing" snippet
- Annotated existing snippet descriptions with the ECMAScript edition that introduced each feature
- Documented the prefix-design philosophy in the README (English + Chinese)

## [0.2.5] - 2023-11-28

- Fixed the Promise chain snippet (function parameter parentheses)

## [0.2.4] - 2023-11-28

- Fixed the exported named function snippet

## [0.2.3] - 2023-11-15

- Updated code style to Airbnb conventions

## [0.2.2] - 2023-07-03

- Updated the function declaration snippet

## [0.2.1] - 2022-11-27

- Fixed the object async method snippet

## [0.2.0] - 2022-11-26

- Expanded declarations, function, class, generator, module, object, and array snippets

## [0.1.6] - 2022-08-30

- Added the exported named async function snippet

## [0.1.5] - 2022-08-25

- Minor snippet fixes; dropped unsupported `html` language contribution

## [0.1.3] - 2022-03-27

- Broad refactor and cleanup across most snippet categories

## [0.1.2] - 2021-05-30

- Added static and private class properties/methods

## [0.1.1] - 2021-05-21

- Added the exported named async arrow function snippet

## [0.1.0] - 2021-05-09

- Initial release: snippets for declarations, statement, array, object, function, chore, module, generator/async, event, Map/Set, Proxy/Reflect, Symbol, Error, and AJAX/fetch
