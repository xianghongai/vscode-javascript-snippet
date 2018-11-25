# JavaScript Snippets (Visual Studio Code)

Download this extension from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=NicholasHsiang.vscode-javascript-snippet)

## Snippets

### Declarations

| Prefix | Body                        | Description               |
|:-------|-----------------------------|---------------------------|
| `us`   | `'use strict';`             |                           |
| `c`    | `const name = value;`       |                           |
| `caw`  | `const name = await value;` |                           |
| `cy`   | `const name = yield value;` |                           |
| `cde`  | `const {  } = ;`            | destructing object syntax |
| `cdea` | `const [  ] = ;`            | destructing array syntax  |
| `l`    | `let name = value;`         |                           |
| `law`  | `let name = await value;`   |                           |
| `ly`   | `let name = yield value;`   |                           |
| `lde`  | `let {  } = ;`              |                           |
| `ldea` | `let [  ] = ;`              |                           |
| `v`    | `var name = value;`         |                           |
| `vde`  | `var {  } = ;`              |                           |
| `vde`  | `var [  ] = ;`              |                           |

### Conditional

| Prefix | Body                                                          |
|:-------|---------------------------------------------------------------|
| `if`   | `if (condition) {  }`                                         |
| `ife`  | `if (condition) {  } else {  }`                               |
| `ei`   | `else if (condition) {  }`                                    |
| `el`   | `else {  }`                                                   |
| `swi`  | `switch (expression) { case valueN: break; default: break; }` |
| `cas`  | `case valueN: break;`                                         |

### Iteration

| Prefix | Body                                                               |
|:-------|--------------------------------------------------------------------|
| `fof`  | `for (let item of object) {  }`                                    |
| `fin`  | `for (let key in object) { if (object.hasOwnProperty(key)) {  } }` |
| `fl`   | `for (let i = 0, len = iterable.length; i < len; i++) {  }`        |
| `flr`  | `for (let len = iterable.length - 1; len >= 0; len--) {  }`        |
| `wh`   | `while (condition) {  }`                                           |
| `whi`  | `let iterableIndex = array.length; while (iterableIndex--) {  }`   |

### Array

| Prefix   | Body                                                                |
|:---------|---------------------------------------------------------------------|
| `ia`     | `Array.isArray(source)`                                             |
| `every`  | `iterable.every((item) => {  })`                                    |
| `filter` | `iterable.filter((item) => {  })`                                   |
| `find`   | `iterable.find((item) => {  })`                                     |
| `some`   | `iterable.some((item) => {  })`                                     |
| `map`    | `iterable.map((item) => {  })`                                      |
| `fe`     | `iterable.forEach(function(item) {  });`                            |
| `fea`    | `iterable.forEach((item) => {  });`                                 |
| `reduce` | `iterable.reduce((accumulator, currentValue) => {  } initialValue)` |
| `seq`    | `[...Array(length).keys()]`                                         |

### Functions

| Prefix    | Body                                                   |
|:----------|--------------------------------------------------------|
| `fn`      | `function name (params) {  }`                          |
| `fnapply` | `method.apply(context, [params]);`                     |
| `fnbind`  | `${1}.bind(this)${0}`                                  |
| `fno`     | `name: function(params) {  }`                          |
| `fncall`  | `method.call(context, params);`                        |
| `fna`     | `function (params) {${0}}`                             |
| `af`      | `(params) => {  }`                                     |
| `afd`     | `({params}) => statement`                              |
| `afn`     | `const name = (params) => {  }`                        |
| `afr`     | `(params) => { return }`                               |
| `gf`      | `function* name(params) {  }`                          |
| `y`       | `yield ${0}`                                           |
| `iif`     | `;(function (params) {  })()`                          |
| `iife`    | `;(function(window, document) {  })(window, document)` |

### Objects

| Prefix | Body                                           |
|:-------|------------------------------------------------|
| `ol`   | `{ key: value, }`                              |
| `kv`   | `key: value,`                                  |
| `oa`   | `Object.assign(target, source)`                |
| `oc`   | `Object.create(obj)`                           |
| `od`   | `Object.defineProperty(dest, 'prop', {  })`    |
| `og`   | `Object.getOwnPropertyDescriptor(obj, 'prop')` |
| `ok`   | `Object.keys(obj)`                             |

### Types

| Prefix | Body                              |
|:-------|-----------------------------------|
| `to`   | `typeof object === 'undefined'`   |
| `io`   | `object instanceof 'constructor'` |

### Timers

| Prefix | Body                                      |
|:-------|-------------------------------------------|
| `st`   | `setTimeout(function() {  }, delay);`     |
| `sta`  | `setTimeout(() => {  }, delay);`          |
| `si`   | `setInterval(function() {  }, interval);` |
| `sia`  | `setInterval(() => {  }, interval);`      |

### Console

| Prefix | Body                                  |
|:-------|---------------------------------------|
| `cd`   | `console.dir();`                      |
| `ce`   | `console.error();`                    |
| `celb` | `console.error('object :', object);`  |
| `ci`   | `console.info();`                     |
| `clg`  | `console.log();`                      |
| `clgl` | `console.log('object :', object);`    |
| `cw`   | `console.warn();`                     |
| `cwl`  | `console.warn('object :', object);`   |
| `ca`   | `console.assert(expression, object);` |
| `cc`   | `console.clear();`                    |
| `cco`  | `console.count(label);`               |
| `cg`   | `console.group("label");`             |
| `cge`  | `console.groupEnd();`                 |
| `ct`   | `console.table(object);`              |
| `ctr`  | `console.trace(object);`              |


### Others

| Prefix    | Body                                     |
|:----------|------------------------------------------|
| `jp`      | `JSON.parse(obj);`                       |
| `js`      | `JSON.stringify(obj);`                   |
| `tc`      | `try {  } catch (err) {  }`              |
| `tcf`     | `try {  } catch (err) {  } finally {  }` |
| `tf`      | `try {  } finally {  }`                  |
| `tne`     | `throw new error`                        |
| `r`       | `return ${0}`                            |
| `rn`      | `return null`                            |
| `rt`      | `return this`                            |
| `ro`      | `return {  }`                            |
| `ternary` | `${1} ? ${2} : ${3}`                     |
| `al`      | `alert('msg');`                          |
| `conf`    | `confirm('msg');`                        |
| `pm`      | `prompt('msg');`                         |
| `de`      | `debugger;`                              |

### ES2015 Modules

| Prefix  | Body                                                         |
|:--------|--------------------------------------------------------------|
| `im`    | `import moduleName from 'module';`                           |
| `imas`  | `import { originalName as alias } from 'module';`            |
| `imall` | `import * as alias from 'module';`                           |
| `imd`   | `import {  } from 'module';`                                 |
| `imn`   | `import 'module';`                                           |
| `ex`    | `export module`                                              |
| `eco`   | `export const name = value`                                  |
| `eas`   | `export moduleName as alias ;`                               |
| `ef`    | `export default from otherModule;`                           |
| `ed`    | `export default expression`                                  |
| `ecl`   | `export default class className {  };`                       |
| `ece`   | `export default class className extends baseClassName {  };` |
| `edaf`  | `export default (params) => {  };`                           |
| `edfn`  | `export default function name (params) {  }`                 |
| `eaf`   | `export const name = (params) => {  };`                      |

### Classes

| Prefix | Body                                                                              |
|:-------|-----------------------------------------------------------------------------------|
| `cl`   | `class name { constructor (params) {  } }`                                        |
| `cons` | `constructor(params) {  }`                                                        |
| `cle`  | `class className extends baseClassName { constructor (params) { super(params) }}` |
| `gter` | `get property () {  }`                                                            |
| `ster` | `set property (value) {  }`                                                       |
| `gs`   | `get property () {  } \n\n set property (value) {  }`                             |
| `m`    | `method (params) {  }`                                                            |
| `am`   | `async name(params) {  }`                                                         |
| `proc` | `var Class = function(params) {  };`                                              |
| `prom` | `Class.prototype.method = function (params) {  };`                                |
| `pgt`  | `get propertyName() { return this. ; }`                                           |
| `pst`  | `set propertyName(value) {  }`                                                    |

### Promises

| Prefix | Body                                                    |
|:-------|---------------------------------------------------------|
| `p`    | `new Promise((resolve, reject) => {  })`                |
| `pa`   | `Promise.all(value)`                                    |
| `pc`   | `myPromise.catch(error => {  })`                        |
| `pfin` | `myPromise.finally(${1})${2}`                           |
| `prj`  | `Promise.reject(value)`                                 |
| `prs`  | `Promise.resolve(value)`                                |
| `pt`   | `myPromise.then((value) => {  })`                       |
| `ptc`  | `myPromise.then((value) => {  }).catch((err) => {  });` |
| `rp`   | `return new Promise((resolve, reject) => {  })`         |

### Async/Await

| Prefix  | Body                                            |
|:--------|-------------------------------------------------|
| `asfn`  | `async function name (params) {  }`             |
| `asfna` | `async function (params) {  }`                  |
| `asaf`  | `async (params) => {  }`                        |
| `asgf`  | `async function* (params) {  }`                 |
| `asgfn` | `async function* name (params) {  }`            |
| `aw`    | `await ${0}`                                    |
| `awpm`  | `await Promise.all(array.map((value) => {  }))` |
| `awpa`  | `await Promise.all(value)`                      |

### Destructuring

| Prefix | Body                                       |
|:-------|--------------------------------------------|
| `dar`  | `const [propertyName] = arrayToDestruct;`  |
| `dob`  | `const {propertyName} = objectToDestruct;` |
| `dp`   | `{  }: parameter`                          |

### DOM

| Prefix | Body                                                       |
|:-------|------------------------------------------------------------|
| `ae`   | `document.addEventListener('event', function (e) {  });`   |
| `aea`  | `document.addEventListener('event', ev => {  })`           |
| `rel`  | `document.removeEventListener('event', listener)`          |
| `evc`  | `ev.preventDefault(); ev.stopPropagation(); return false;` |
| `gi`   | `document.getElementById('id');`                           |
| `gc`   | `document.getElementsByClassName('class');`                |
| `gt`   | `document.getElementsByTagName('tag');`                    |
| `qs`   | `document.querySelector('selector');`                      |
| `qsa`  | `document.querySelectorAll('selector');`                   |
| `cdf`  | `document.createDocumentFragment();`                       |
| `cel`  | `document.createElement(elem);`                            |
| `ga`   | `document.getAttribute('attr');`                           |
| `sa`   | `document.setAttribute('attr', value);`                    |
| `ra`   | `document.removeAttribute('attr');`                        |
| `ac`   | `document.appendChild(elem);`                              |
| `rc`   | `document.removeChild(elem);`                              |
| `ih`   | `document.innerHTML = 'elem';`                             |
| `tco`  | `document.textContent = 'content';`                        |
| `cla`  | `document.classList.add('class');`                         |
| `clr`  | `document.classList.remove('class');`                      |
| `clt`  | `document.classList.toggle('class');`                      |

### CommonJS/Node.js

| Prefix | Body                                                               |
|:-------|--------------------------------------------------------------------|
| `ec`   | `class name { constructor (params) {  } }; module.exports = name;` |
| `em`   | `exports.member = value`                                           |
| `me`   | `module.exports = name`                                            |
| `rq`   | `require('module')`                                                |
| `rqc`  | `const module = require('module');`                                |
| `sim`  | `setImmediate(() => {  })`                                         |
| `on`   | `emitter.on('event', (params) => {  })`                            |

### BDD Testing (Mocha, Jasmine, etc.)

| Prefix | Body                                                  |
|:-------|-------------------------------------------------------|
| `desc` | `describe(description, function () {  })`             |
| `cont` | `context(description, callback`                       |
| `it`   | `it('${1:description}', () => {  })`                  |
| `ita`  | `it('${0:description}', async (done) => { done() });` |
| `afe`  | `afterEach(function () {  })`                         |
| `bfe`  | `beforeEach(function () {  })`                        |
| `aft`  | `after(function () {  })`                             |
| `bf`   | `before(function () {  })`                            |

### TypeScript

| Prefix | Body                  |
|:-------|-----------------------|
| `mod`  | `module name {  }`    |
| `enum` | `enum name {  }`      |
| `int`  | `interface name {  }` |
| `nam`  | `namespace name {  }` |
| `typ`  | `type name = {  }`    |

## License

MIT License
