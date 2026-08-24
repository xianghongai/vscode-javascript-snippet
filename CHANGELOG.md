# Changelog

All notable changes to the "JavaScript Code Snippet" extension are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Each entry lists only the headline change per release — see git history/tags for full detail.

## [Unreleased]

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
