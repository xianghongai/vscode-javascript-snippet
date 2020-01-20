# JavaScript Snippets (Visual Studio Code)

Code snippets for JavaScript in ES3/5/6+ syntax;

Download this extension from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=NicholasHsiang.vscode-javascript-snippet).

- Declarations
- Statement
- Function
- Array
- Object
- String
- Number
- Regexp
- chore
- Module
- Class
- Promise
- Generator Iterator
- Async
- Symbol
- Maps & Sets
- Error
- Event
- AJAX
- Proxy & Reflection
- Math
- DOM
- BOM
- Console
- CommonJS/Node.js
- BDD Testing (Mocha, Jasmine, etc.)

## Supported languages (file extensions)

- JavaScript (`.js`)
- TypeScript (`.ts`)
- JavaScript React (`.jsx`)
- TypeScript React (`.tsx`)
- Html (`.html`)
- Vue (`.vue`)

## Snippets

Note: All the snippets include the final semicolon `;`

### Declarations

| Prefix | Body                  | Description                          |
| :----- | --------------------- | ------------------------------------ |
| `usm`  | `'use strict';`       | **u**se **s**trict **m**ode          |
| `c`    | `const name = value;` |                                      |
| `cdo`  | `const {} = ;`        | **c**onst **d**estructing **o**bject |
| `cda`  | `const [] = ;`        | **c**onst **d**estructing **a**rray  |
| `l`    | `let name = value;`   |                                      |
| `ldo`  | `let {} = ;`          |                                      |
| `lda`  | `let [] = ;`          |                                      |
| `v`    | `var name = value;`   |                                      |
| `vdo`  | `var {} = ;`          |                                      |
| `vda`  | `var [] = ;`          |                                      |
| `dp`   | `{}: parameter`       | **d**estructuring **p**arameter      |

### Statement

| Prefix            | Body                                                                              | Description                            |
| :---------------- | --------------------------------------------------------------------------------- | -------------------------------------- |
| `if`              | `if (condition) { }`                                                              |                                        |
| `ife`             | `if (condition) { } else { }`                                                     |                                        |
| `ei`              | `else if (condition) { }`                                                         |                                        |
| `el`              | `else { }`                                                                        |                                        |
| `swi`             | `switch () { case : break; default: break;}`                                      |                                        |
| `cas`             | `case : break;`                                                                   |                                        |
| `fin`             | `for (const key in object) { if (object.hasOwnProperty(key)) { }}`                | **f**or-**in**                         |
| `fof`             | `for (const item of object) { }`                                                  | **f**or-**of**                         |
| `fl`, `fo`, `for` | `for (const index = 0, length = iterable.length; index < length; index += 1) { }` |                                        |
| `flr`, `forr`     | `for (const length = iterable.length - 1; length >= 0; length -= 1) { }`          | **f**or **l**oop iterable(**r**everse) |
| `wh`              | `while (condition) { }`                                                           |                                        |
| `whi`             | `let iterableIndex = array.lengthwhile (iterableIndexIndex--) { }`                |                                        |

### Function

| Prefix    | Body                                                                                             | Description                                   |
| :-------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| `fn`      | `function name (params) { }`                                                                     | **f**u**n**ction                              |
| `fna`     | `function (params) { }`                                                                          | **f**u**n**ction **a**nonymous                |
| `vfn`     | `var name = function (params) { }`                                                               |                                               |
| `lfn`     | `let name = function (params) { }`                                                               |                                               |
| `cfn`     | `const name = function (params) { }`                                                             |                                               |
| `fnp`     | `name: function(params) { }`                                                                     | **f**u**n**ction as **p**roperty              |
| `fnapply` | `method.apply(context, [params]);`                                                               | **f**u**n**ction.**apply**                    |
| `fncall`  | `method.call(context, params);`                                                                  | **f**u**n**ction.**call**                     |
| `fnbind`  | `method.bind(this);`                                                                             | **f**u**n**ction.**bind**                     |
| `af`      | `(params) => { }`                                                                                | **a**rrow **f**unction                        |
| `afr`     | `(params) => { return }`                                                                         | **a**rrow **f**unction with **r**eturn        |
| `afd`     | `({params}) => statement`                                                                        | **a**rrow **f**unction with **d**estructuring |
| `laf`     | `let name = (params) => { }`                                                                     |                                               |
| `caf`     | `const name = (params) => { }`                                                                   |                                               |
| `iif`     | `;((params) => { })()`                                                                           |                                               |
| `iife`    | `;(function (params) { })()`                                                                     |                                               |
| `nt`      | `if (typeof new.target === 'undefined') { throw new Error('Fn() must be called with new');}`" ]} | **n**ew.**t**arget                            |

### Array

| Prefix      | Body                                                                | Description                                      |
| :---------- | ------------------------------------------------------------------- | ------------------------------------------------ |
| `ar`        | `const arr = [];`                                                   |                                                  |
| `arl`       | `iterable.length;`                                                  |                                                  |
| `isa`       | `Array.isArray(value)`                                              |                                                  |
| `arfr`      | `Array.from(arrayLike);`                                            |                                                  |
| `arfr`      | `Array.from(arrayLike, (item) => { });`                             |                                                  |
| `arof`      | `Array.of(elementN);`                                               |                                                  |
| `arc`       | `iterable.concat(valueN);`                                          | **ar**ray.**c**oncat                             |
| `arcw`      | `iterable.copyWithin(target, start, end);`                          | **ar**ray.**c**opy**W**ithin                     |
| `are`       | `iterable.entries();`                                               | **ar**ray.**e**ntries                            |
| `arev`      | `iterable.every((element) => { });`                                 | **ar**ray.**ev**ery                              |
| `arfill`    | `iterable.fill(value, start, end);`                                 |                                                  |
| `arf`       | `iterable.filter((element) => { });`                                |                                                  |
| `arfi`      | `iterable.find((element) => { });`                                  |                                                  |
| `arfin`     | `iterable.findIndex((element) => { })`                              |                                                  |
| `arflat`    | `iterable.flat();`                                                  |                                                  |
| `arflatMap` | `iterable.flatMap((value) => value);`                               |                                                  |
| `fea`       | `iterable.forEach((currentValue) => { });`                          | **f**or**E**ach callback with **a**rrow function |
| `feai`      | `iterable.forEach((currentValue, index) => { });`                   |                                                  |
| `fe`        | `iterable.forEach(function(currentValue) { });`                     |                                                  |
| `fei`       | `iterable.forEach(function(currentValue, index) { });`              |                                                  |
| `ari`       | `iterable.includes(valueToFind)`                                    |                                                  |
| `ario`      | `iterable.indexOf(searchElement)`                                   |                                                  |
| `arj`       | `iterable.join(separator);`                                         |                                                  |
| `ark`       | `iterable.keys();`                                                  |                                                  |
| `arlio`     | `iterable.lastIndexOf(searchElement)`                               |                                                  |
| `map`       | `iterable.map((currentValue) => { });`                              |                                                  |
| `arp`       | `iterable.pop();`                                                   |                                                  |
| `arj`       | `iterable.push(elementN);`                                          |                                                  |
| `arr`       | `iterable.reduce((accumulator, currentValue) => { return });`       |                                                  |
| `arrr`      | `iterable.reduce​Right((accumulator, currentValue) => { return });` |                                                  |
| `arre`      | `iterable.reverse();`                                               |                                                  |
| `ars`       | `iterable.shift();`                                                 |                                                  |
| `arsl`      | `iterable.slice(begin, end);`                                       |                                                  |
| `arso`      | `iterable.some((element) => { });`                                  |                                                  |
| `arsor`     | `iterable.sort((firstEl, secondEl) => { });`                        |                                                  |
| `arsp`      | `iterable.splice(start, deleteCount, item);`                        |                                                  |
| `aru`       | `iterable.unshift(elementN);`                                       |                                                  |
| `arv`       | `iterable.values();`                                                |                                                  |
| `arsi`      | `iterable[Symbol.iterator]();`                                      |                                                  |
| `seq`       | `[...Array(length).keys()]`                                         |                                                  |

### Object

| Prefix   | Body                                                                                                                                                                                                                                                   | Description                                                 |
| :------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| `ol`     | `{ key: value }`                                                                                                                                                                                                                                       |                                                             |
| `kv`     | `key: value,`                                                                                                                                                                                                                                          |                                                             |
| `oa`     | `Object.assign(target, source);`                                                                                                                                                                                                                       |                                                             |
| `oc`     | `Object.create(obj);`                                                                                                                                                                                                                                  |                                                             |
| `odp`    | `Object.defineProperty(dest, 'propertyName', { value: undefined, configurable: false, enumerable: false, writable: false})`                                                                                                                            | **O**bject.**d**efine**P**roperty(data descriptors)         |
| `odpa`   | `Object.defineProperty(dest, 'propertyName', { get() { return value; }, set(newValue) { value = newValue; }, enumerable: false, configurable: false})`                                                                                                 | **O**bject.**d**efine**P**roperty(**a**ccessor descriptors) |
| `odps`   | `Object.defineProperties(dest, { propertyName: { configurable: false, enumerable: false value: undefined, writable: false }, propertyName: { get() { return value; }, set(newValue) { value = newValue; } enumerable: false, configurable: false }});` | **O**bject.**d**efine**P**ropertie**s**                     |
| `oe`     | `Object.entries(obj);`                                                                                                                                                                                                                                 |                                                             |
| `of`     | `Object.freeze(obj);`                                                                                                                                                                                                                                  |                                                             |
| `ofe`    | `Object.fromEntries(iterable);`                                                                                                                                                                                                                        |                                                             |
| `ogopd`  | `Object.getOwnPropertyDescriptor(obj, 'propertyName');`                                                                                                                                                                                                | **O**bject.**g**et**O**wn**P**roperty**D**escriptor         |
| `ogopds` | `Object.getOwnPropertyDescriptors(obj);`                                                                                                                                                                                                               | **O**bject.**g**et**O**wn**P**roperty**D**escriptor**s**    |
| `ogopn`  | `Object.getOwnPropertyNames(obj);`                                                                                                                                                                                                                     | **O**bject.**g**et**O**wn**P**roperty**N**ames              |
| `ogops`  | `Object.getOwnPropertySymbols(obj);`                                                                                                                                                                                                                   | **O**bject.**g**et**O**wn**P**roperty**S**ymbols            |
| `ogpo`   | `Object.getPrototypeOf(obj);`                                                                                                                                                                                                                          | **O**bject.**g**et**P**rototype**O**f                       |
| `oi`     | `Object.is(value1, value2);`                                                                                                                                                                                                                           |                                                             |
| `oie`    | `Object.isExtensible(obj)`                                                                                                                                                                                                                             |                                                             |
| `oif`    | `Object.isFrozen(obj)`                                                                                                                                                                                                                                 |                                                             |
| `ois`    | `Object.isSealed(obj)`                                                                                                                                                                                                                                 |                                                             |
| `ok`     | `Object.keys(obj);`                                                                                                                                                                                                                                    |                                                             |
| `ope`    | `Object.preventExtensions(obj);`                                                                                                                                                                                                                       |                                                             |
| `os`     | `Object.seal(obj);`                                                                                                                                                                                                                                    |                                                             |
| `ospo`   | `Object.setPrototypeOf(obj, prototype);`                                                                                                                                                                                                               | **O**bject.**s**et**P**rototype**O**f                       |
| `ov`     | `Object.values(obj);`                                                                                                                                                                                                                                  |                                                             |
| `hop`    | `obj.hasOwnProperty(propertyName)`                                                                                                                                                                                                                     | **h**as**O**wn**P**roperty                                  |
| `ipo`    | `prototypeObj.isPrototypeOf(object)`                                                                                                                                                                                                                   | **i**s**P**rototype**O**f                                   |
| `pie`    | `obj.propertyIsEnumerable(propertyName)`                                                                                                                                                                                                               | **p**roperty**I**s**E**numerable                            |
| `tls`    | `objects.toLocaleString();`                                                                                                                                                                                                                            | **t**o**L**ocale**S**tring                                  |
| `ts`     | `objects.toString();`                                                                                                                                                                                                                                  | **t**o**S**tring                                            |
| `vo`     | `objects.valueOf();`                                                                                                                                                                                                                                   | **v**alue**O**f                                             |

### String

| Prefix  | Body                                     | Description                         |
| :------ | ---------------------------------------- | ----------------------------------- |
| `sfcc`  | `String.fromCharCode(numN)`              | **S**tring.**f**rom**C**har**C**ode |
| `sfcp`  | `String.fromCodePoint(numN)`             |                                     |
| `sr`    | <code>String.raw`templateString`</code>  |                                     |
| `sca`   | `str.charAt(index)`                      |                                     |
| `scca`  | `str.charCodeAt(index)`                  |                                     |
| `scpa`  | `str.codePointAt(position)`              |                                     |
| `sc`    | `str.concat(stringN)`                    |                                     |
| `sew`   | `str.endsWith(searchString)`             |                                     |
| `sin`   | `str.includes(searchString)`             |                                     |
| `sio`   | `str.indexOf(searchValue)`               |                                     |
| `slio`  | `str.lastIndexOf(searchValue)`           |                                     |
| `slc`   | `str.localeCompare(compareString)`       |                                     |
| `sm`    | `str.match(regexp)`                      |                                     |
| `sma`   | `str.matchAll(regexp)`                   |                                     |
| `sn`    | `str.normalize('NFC')`                   |                                     |
| `spe`   | `str.padEnd(targetLength, padString)`    |                                     |
| `sps`   | `str.padStart(targetLength, padString)`  |                                     |
| `sr`    | `str.repeat(count)`                      |                                     |
| `sre`   | `str.replace(regexp, newSubStr)`         |                                     |
| `ss`    | `str.search(regexp)`                     |                                     |
| `ssl`   | `str.slice(beginIndex, endIndex)`        |                                     |
| `ssp`   | `str.split(separator)`                   |                                     |
| `ssw`   | `str.startsWith(searchString, position)` |                                     |
| `sss`   | `str.substring(indexStart, indexEnd)`    |                                     |
| `stllc` | `str.toLocaleLowerCase()`                |                                     |
| `stluc` | `str.toLocaleUpperCase()`                |                                     |
| `stlc`  | `str.toLowerCase()`                      |                                     |
| `stuc`  | `str.toUpperCase()`                      |                                     |
| `str`   | `str.trim()`                             |                                     |
| `ste`   | `str.trimEnd() //trimRight()`            |                                     |
| `sts`   | `str.trimStart() //trimLeft()`           |                                     |
| `ssi`   | `str[Symbol.iterator]`                   |                                     |

### Number

| Prefix  | Body                            |
| :------ | ------------------------------- |
| `ne`    | `Number.EPSILON`                |
| `nmasi` | `Number​.MAX_SAFE_INTEGER`      |
| `nmav`  | `Number.MAX_VALUE`              |
| `nmisi` | `Number​.MIN_SAFE_INTEGER`      |
| `nmav`  | `Number​.MIN_VALUE`             |
| `nni`   | `Number​.NEGATIVE_INFINITY`     |
| `nn`    | `Number​.NaN`                   |
| `npi`   | `Number​.POSITIVE_INFINITY`     |
| `nif`   | `Number​.isFinite(value)`       |
| `nii`   | `Number​.isInteger(value)`      |
| `nin`   | `Number​.isNaN(value)`          |
| `nisi`  | `Number​.isSafe​Integer(value)` |
| `npf`   | `Number​.parse​Float(string)`   |
| `npi`   | `Number​.parseInt(string)`      |
| `nte`   | `number.toExponential()`        |
| `ntf`   | `number.toFixed()`              |
| `ntp`   | `number.toPrecision()`          |

### Regexp

| Prefix | Body                                                          | Description                |
| :----- | ------------------------------------------------------------- | -------------------------- |
| `re`   | `let regex = RegExp('pattern');`                              | **R**eg**E**xp             |
| `rep`  | `let regex = /pattern/;`                                      | **R**eg**E**xp **p**attern |
| `ree`  | `let regex = RegExp('pattern');let result = regex.exec(str);` |                            |
| `ret`  | `let regex = RegExp('pattern');let result = regex.test(str);` |                            |

### Chore

| Prefix    | Body                                  | Description                    |
| :-------- | ------------------------------------- | ------------------------------ |
| `to`      | `typeof object === 'undefined'`       | **t**ype**o**f                 |
| `io`      | `object instanceof 'constructor'`     | **i**nstance**o**f             |
| `jp`      | `JSON.parse(obj);`                    |                                |
| `js`      | `JSON.stringify(obj);`                |                                |
| `tc`      | `try { } catch (err) { }`             |                                |
| `tcf`     | `try { } catch (err) { } finally { }` |                                |
| `tf`      | `try { } finally { }`                 |                                |
| `r`       | `return ;`                            |                                |
| `rn`      | `return null;`                        |                                |
| `rt`      | `return this;`                        |                                |
| `ro`      | `return { };`                         |                                |
| `ternary` | `? : ;`                               |                                |
| `de`      | `debugger;`                           |                                |
| `eu`      | `encodeURI(URI)`                      | **e**ncode**U**RI              |
| `du`      | `decodeURI(encodedURI)`               | **d**ecode**U**RI              |
| `euc`     | `encodeURIComponent(str)`             | **e**ncode**U**RI**C**omponent |
| `duc`     | `decodeURIComponent(encodedURI)`      | **d**ecode**U**RI**C**omponent |

### Module

| Prefix   | Body                                                                                         | Description                                 |
| :------- | -------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `im`     | `import { moduleName } from 'module';`                                                       | **im**port                                  |
| `imd`    | `import moduleName from 'module';`                                                           | **im**port **d**efault export               |
| `imas`   | `import { originalName as alias } from 'module';`                                            | **im**port **as** renamed exports           |
| `imall`  | `import * as alias from 'module';`                                                           | **im**port **all** module as alias          |
| `imn`    | `import 'module';`                                                                           | **im**port without module **n**ame          |
| `ex`     | `export {nameN};`                                                                            | **ex**port                                  |
| `exas`   | `export {variable as name};`                                                                 | **ex**port **as** renaming                  |
| `exl`    | `export let name = value;`                                                                   |                                             |
| `exc`    | `export const name = value;`                                                                 |                                             |
| `exfn`   | `export function name (){ }`                                                                 |                                             |
| `exafn`  | `export const name = (params) => { };`                                                       | **ex**port named **a**rrow **f**u**n**ction |
| `exd`    | `export default expression;`                                                                 | **ex**port **d**efault                      |
| `exdas`  | `export {name as default};`                                                                  |                                             |
| `exdc`   | `export default class className { constructor (params) { } }`                                |                                             |
| `exdce`  | `export default class className extends baseClassName { constructor (params) { super(); } }` |                                             |
| `exdaf`  | `export default (params) => { }`                                                             |                                             |
| `exdfn`  | `export default function name (params) { }`                                                  |                                             |
| `exfr`   | `export {default} from otherModule;`                                                         | **ex**port **fr**om                         |
| `exallo` | `export * from otherModule;`                                                                 | **ex**port **all** from **o**ther module    |

### Class

| Prefix   | Body                                                                                              | Description                   |
| :------- | ------------------------------------------------------------------------------------------------- | ----------------------------- |
| `cl`     | `class name { constructor (params) { } }`                                                         | **cl**ass                     |
| `cle`    | `class className extends baseClassName { constructor (params) { super(); } }`                     | **cl**ass **e**xtends         |
| `cls`    | `static create(params) { return new PersonClass(params);}`                                        | **cl**ass **s**tatic          |
| `cons`   | `constructor(params) { }`                                                                         | class **cons**tructor         |
| `get`    | `get propertyName () { return this.element; }`                                                    | **g**et **p**ropertyName      |
| `set`    | `set propertyName (value) { this.element = value; }`                                              | **s**et **p**ropertyName      |
| `gs`     | `get propertyName () { return this.element; } set propertyName (value) { this.element = value; }` | **g**etter and **s**etter     |
| `m`      | `method (params) { }`                                                                             | **m**ethod                    |
| `asm`    | `async method(params) { }`                                                                        | **as**ync **m**ethod          |
| `protoc` | `var Constructor = function(params) { };`                                                         | **pro**totype **c**onstructor |
| `protom` | `Constructor.prototype.method = function (params) { };`                                           | **pro**totype **m**ethod      |

### Promise

| Prefix | Body                                                                                                     | Description                                      |
| :----- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `p`    | `const promise = new Promise((resolve, reject) => { });promise.then(result => { }).catch(error => { });` | new **p**romise                                  |
| `pa`   | `Promise.all([value]);`                                                                                  | **P**romise.**a**ll                              |
| `prj`  | `Promise.reject(value);`                                                                                 | **P**romise.**r**e**j**ect                       |
| `prs`  | `Promise.resolve(value);`                                                                                | **P**romise.**r**e**s**olve                      |
| `rj`   | `reject(err);`                                                                                           | **r**e**j**ect                                   |
| `rs`   | `resolve(value);`                                                                                        | **r**e**s**olve                                  |
| `pc`   | `promise.catch(error => { });`                                                                           | **p**romise.**c**atch                            |
| `pf`   | `promise.finally(() => { });`                                                                            | **p**romise.**f**inally                          |
| `pt`   | `promise.then(result => { })`                                                                            | **p**romise.**t**hen()                           |
| `ptc`  | `promise.then(result => { }).catch(error => { });`                                                       | **p**romise.**t**hen().**c**atch()               |
| `ptcf` | `promise.then(result => { }).catch(error => { }).finally(() => { });`                                    | **p**romise.**t**hen().**c**atch().**f**inally() |
| `rp`   | `return new Promise((resolve, reject) => { })`                                                           |                                                  |

### Generator Iterator

| Prefix | Body                                | Description                |
| :----- | ----------------------------------- | -------------------------- |
| `cy`   | `const name = yield value;`         |                            |
| `ly`   | `let name = yield value;`           |                            |
| `gf`   | `function* name(params) { yield ;}` | **g**enerator **f**unction |
| `y`    | `yield expression;`                 |                            |
| `yg`   | `yield* expression;`                |                            |

### Async

| Prefix   | Body                                                                                                      | Description                                            |
| :------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `caw`    | `const result = await promise;`                                                                           | **c**onst **aw**aited                                  |
| `law`    | `let result = await promise;`                                                                             |                                                        |
| `asfn`   | `async function name (params) { const result = await promise; return result;}name().then(result => { });` | **as**ync **f**unction **n**amed                       |
| `asfna`  | `async function (params) { }`                                                                             | **as**ync **f**u**n**ction **a**nonymous               |
| `asgfn`  | `async function* name (params) { }`                                                                       | **as**ync **g**enerator **f**unction **n**amed         |
| `asgfna` | `async function* (params) { }`                                                                            | **as**ync **g**enerator **f**u**n**ction **a**nonymous |
| `asaf`   | `async (params) => { }`                                                                                   | **as**ync **a**rrow **f**unction                       |
| `aw`     | `await promise`                                                                                           |                                                        |
| `awpa`   | `await Promise.all(value)`                                                                                |                                                        |
| `awpam`  | `await Promise.all(array.map((value) => { }))`                                                            |                                                        |

### Symbol

| Prefix | Body                       | Description |
| :----- | -------------------------- | ----------- |
| lsy    | `let symObj = Symbol();`   |
| csy    | `const symObj = Symbol();` |
| symf   | `Symbol.for('key');`       |
| symk   | `Symbol.keyFor('symObj');` |

### Maps & Sets

| Prefix      | Body                                     | Description |
| :---------- | ---------------------------------------- | ----------- |
| `lm`        | `let resourceMap = new Map();`           |
| `ls`        | `let resourceSet = new Set();`           |
| `lwm`       | `let resourceWeakMap = new WeakMap();`   |
| `lws`       | `let resourceWeakSet = new WeakSet();`   |
| `cm`, `ma`  | `const resourceMap = new Map();`         |
| `cs`, `se`  | `const resourceSet = new Set();`         |
| `cwm`, `wm` | `const resourceWeakMap = new WeakMap();` |
| `cws`, `ws` | `const resourceWeakSet = new WeakSet();` |

### Error

| Prefix | Body                                  | Description |
| :----- | ------------------------------------- | ----------- |
| `tn`   | `throw new Error('message')`          |
| `tne`  | `throw new EvalError('message')`      |
| `tnr`  | `throw new RangeError('message')`     |
| `tnre` | `throw new ReferenceError('message')` |
| `tns`  | `throw new SyntaxError('message')`    |
| `tnt`  | `throw new TypeError('message')`      |
| `tnu`  | `throw new URIError('message')`       |

### Event

| Prefix    | Body                                                           | Description                                          |
| :-------- | -------------------------------------------------------------- | ---------------------------------------------------- |
| `ael`     | `document.addEventListener('type', event => { });`             | **a**dd**E**vent**L**istener **a**rrow function      |
| `aelfn`   | `document.addEventListener('type', function (event) { });`     | **a**dd**E**vent**L**istener                         |
| `rel`     | `document.removeEventListener('event', listener);`             | **r**emove**E**vent**L**istener                      |
| `eps`     | `event.preventDefault();event.stopPropagation();return false;` | **e**vent **p**reventDefault and **s**topPropagation |
| `epd`     | `event.preventDefault();`                                      | **e**vent **p**revent**D**efault                     |
| `esp`     | `event.stopPropagation();`                                     | **e**vent **s**top**P**ropagation                    |
| `dev`     | `const cancelled = !target.dispatchEvent(event);`              |
| `click`   | `document.addEventListener('click', () => { });`               |
| `keydown` | `document.addEventListener('keydown', event => { });`          |
| `load`    | `window.addEventListener('load', () => { });`                  |
| `ready`   | `window.addEventListener('DOMContentLoaded', () => { });`      |

### Ajax

| Prefix           | Body | Description                |
| :--------------- | ---- | -------------------------- |
| `xhr`            |      | **X**ML**H**ttp**R**equest |
| `fetch`          |      | fetch                      |
| `fetchget`,`fg`  |      | fetch get                  |
| `fetchpost`,`fp` |      | fetch post                 |

### Proxy & Reflection

| Prefix                | Body | Description                                                   |
| :-------------------- | ---- | ------------------------------------------------------------- |
| `proxy.set`           |      | Validating Properties Using the `set` Trap                    |
| `proxy.get`           |      | Object Shape Validation Using the `get` Trap                  |
| `proxy.has`           |      | Hiding Property Existence Using the `has` Trap                |
| `proxy.delete`        |      | Preventing Property Deletion with the **delete**Property Trap |
| `proxy.prototype`     |      | **Prototype** Proxy Traps                                     |
| `proxy.extensibility` |      | Object **Extensibility** Traps                                |
| `proxy.property`      |      | **Property** Descriptor Traps                                 |
| `proxy.ownKeys`       |      | The `ownKeys` Trap                                            |
| `proxy.function`      |      | Function Proxies with the `apply` and `construct` Traps       |
| `proxy.revocable`     |      | **Revocable** Proxies                                         |

### Math

| Prefix | Body            | Description            |
| :----- | --------------- | ---------------------- |
| `mr`   | `Math.random()` |
| `mro`  | `Math.round()`  | 20.49 → 20, 20.5 → 21  |
| `mc`   | `Math.ceil()`   | 7.004 → 8, -7.004 → -7 |
| `mf`   | `Math.floor()`  | 5.95 → 5, -5.05 → -6   |
| `mtr`  | `Math.trunc()`  | 5.05 → 5, -0.123 → -0  |

### Dom

| Prefix                   | Body                                                                | Description                           |
| :----------------------- | ------------------------------------------------------------------- | ------------------------------------- |
| `cdf`                    | `document.createDocumentFragment();`                                |
| `cel`                    | `document.createElement(elem);`                                     | **c**reate**El**ement                 |
| `ctn`                    | `document.createTextNode(data);`                                    |
| `gi`                     | `document.getElementById('id');`                                    | **g**etElementBy**I**d                |
| `gc`                     | `document.getElementsByClassName('className');`                     | **g**etElementsBy**C**lassName        |
| `gt`                     | `document.getElementsByTagName('tagName');`                         | **g**etElementsBy**T**agName          |
| `qs`                     | `document.querySelector('selector');`                               | **q**uery**S**elector                 |
| `qsa`                    | `document.querySelectorAll('selector');`                            | **q**uery**S**elector**A**ll          |
| `cn`                     | `const nodeList = node.childNodes;`                                 | **c**hild**N**odes                    |
| `pe`                     | `const parentElement = node.parentElement;`                         | **p**arent**E**lement                 |
| `pn`                     | `const parentNode = node.parentNode;`                               | **p**arent**N**ode                    |
| `fc`                     | `const childNode = node.firstChild;`                                | **f**irst**C**hild                    |
| `lc`                     | `const childNode = node.lastChild;`                                 | **l**ast**C**hild                     |
| `ns`                     | `const nextNode = node.nextSibling;`                                | **n**ext**S**ibling                   |
| `ps`                     | `const previousNode = node.previousSibling;`                        | **p**revious**S**ibling               |
| `tco`                    | `element.textContent = 'content';`                                  | **t**ext**Co**ntent                   |
| `ib`                     | `node.insertBefore(newNode, referenceNode);`                        | **i**nsert**B**efore                  |
| `ac`                     | `node.appendChild(element);`                                        | **a**ppend**C**hild                   |
| `cn`                     | `const newClone = node.cloneNode(true);`                            | **c**lone**N**ode                     |
| `cdp`                    | `const compareMask = node.compareDocumentPosition(otherNode);`      | **c**ompare**D**ocument**P**osition   |
| `con`                    | `node.contains(otherNode);`                                         | **c**ontains                          |
| `rmc`                    | `node.removeChild(child);`                                          | **r**e**m**ove**C**hild               |
| `rpc`                    | `parentNode.replaceChild(newChild, oldChild);`                      | **r**e**p**lace**C**hild              |
| `hcn`                    | `node.hasChildNodes()`                                              | **h**as**C**hild**N**odes             |
| `pes`                    | `const prevNode = NonDocumentTypeChildNode.previousElementSibling;` | **p**revious**E**lement**S**ibling    |
| `nes`                    | `const nextNode = NonDocumentTypeChildNode.nextElementSibling;`     | **n**ext**E**lement**S**ibling        |
| `fec`                    | `const element = parentNode.firstElementChild;`                     | **f**irst**E**lement**C**hild         |
| `lec`                    | `const element = parentNode.lastElementChild;`                      | **l**ast**E**lement**C**hild          |
| `cec`                    | `const count = parentNode.childElementCount;`                       | **c**hild**E**lement**C**ount         |
| `children`               | `const children = parentNode.children;`                             |
| `append`                 | `parentNode.append(Nodes/DOMStrings);`                              |
| `prepend`                | `parentNode.prepend(Nodes/DOMStrings);`                             |
| `before`                 | `ChildNode.before(Nodes/DOMStrings);`                               |
| `after`                  | `ChildNode.after(Nodes/DOMStrings);`                                |
| `remove`                 | `ChildNode.remove();`                                               |
| `rw`, `replaceWith`      | `ChildNode.replaceWith(Node/DOMString);`                            |
| `gcr`                    | `const rectCollection = element.getClientRects();`                  | **g**et**C**lient**R**ects            |
| `gbcr`, `rect`           | `const domRect = element.getBoundingClientRect();`                  | **g**et**B**ounding**C**lient**R**ect |
| `closest`                | `const closestElement = targetElement.closest('selector');`         |
| `sa`                     | `element.setAttribute('attrName', 'value');`                        |
| `ga`                     | `const attribute = element.getAttribute('attrName');`               |
| `ha`                     | `element.hasAttribute('attrName')`                                  |
| `ra`                     | `element.removeAttribute('attrName');`                              |
| `ta`                     | `element.toggleAttribute('attrName');`                              |
| `matches`                | `element.matches('selectorString')`                                 |
| `ih`                     | `element.innerHTML = 'DOMString';`                                  |
| `oh`                     | `element.outerHTML = 'DOMString';`                                  |
| `it`                     | `element.innerText = 'renderText';`                                 |
| `cla`                    | `element.classList.add('className');`                               | **c**lass**L**ist.**a**dd             |
| `clc`                    | `element.classList.contains('className');`                          |
| `clr`                    | `element.classList.remove('className');`                            |
| `clt`                    | `element.classList.toggle('className');`                            |
| `before`, `iah.before`   | `element.insertAdjacentHTML('beforebegin', 'DOMString');`           |
| `after`, `iah.after`     | `element.insertAdjacentHTML('afterend', 'DOMString');`              |
| `prepend`, `iah.prepend` | `element.insertAdjacentHTML('afterbegin', 'DOMString');`            |
| `append`, `iah.append`   | `element.insertAdjacentHTML('beforeend', 'DOMString');`             |
| `before`, `iae.before`   | `element.insertAdjacentElement('beforebegin', element);`            |
| `after`, `iae.after`     | `element.insertAdjacentElement('afterend', element);`               |
| `prepend`, `iae.prepend` | `element.insertAdjacentElement('afterbegin', element);`             |
| `append`, `iae.append`   | `element.insertAdjacentElement('beforeend', element);`              |
| `before`, `iat.before`   | `element.insertAdjacentText('beforebegin', value);`                 |
| `after`, `iat.after`     | `element.insertAdjacentText('afterend', value);`                    |
| `prepend`, `iat.prepend` | `element.insertAdjacentText('afterbegin', value);`                  |
| `append`, `iat.append`   | `element.insertAdjacentText('beforeend', value);`                   |
| `scrollTo`               | `element.scrollTo({left, top, behavior: 'smooth'});`                |
| `scrollIntoView`         | `element.scrollIntoView();`                                         |
| `scl`                    | `element.scrollLeft;`                                               |
| `sct`                    | `element.scrollTop;`                                                |
| `dcw`                    | `${1:document.documentElement}.clientWidth`                         |
| `dch`                    | `${1:document.documentElement}.clientHeight`                        |
| `dow`                    | `${1:document.documentElement}.offsetWidth`                         |
| `doh`                    | `${1:document.documentElement}.offsetHeight`                        |
| `dsw`                    | `${1:document.documentElement}.scrollWidth`                         |
| `dsh`                    | `${1:document.documentElement}.scrollHeight`                        |

### Bom

| Prefix | Body                                                                                     | Description                              |
| :----- | ---------------------------------------------------------------------------------------- | ---------------------------------------- |
| `wa`   | `window.alert('msg');`                                                                   |
| `wc`   | `window.confirm('msg');`                                                                 |
| `wp`   | `window.prompt('title', 'defaultText');`                                                 |
| `st`   | `const timeout = window.setTimeout(() => { }, delay); window.clearTimeout(timeout);`     | **s**et**T**imeout                       |
| `stfn` | `var timeout = window.setTimeout(function() { }, delay); window.clearTimeout(timeout);`  |
| `si`   | `const timer = window.setInterval(() => { }, interval); window.clearInterval(timer);`    | **s**et**I**nterval                      |
| `sifn` | `var timer = window.setInterval(function() { }, interval); window.clearInterval(timer);` |
| `lss`  | `localStorage.setItem('key', 'value');`                                                  | **l**ocal**S**torage.**s**etItem         |
| `lsg`  | `localStorage.getItem('key');`                                                           |
| `lsr`  | `localStorage.removeItem('key');`                                                        |
| `lsc`  | `localStorage.clear();`                                                                  |
| `wsaw` | `window.screen.availWidth`                                                               | **w**indow.**s**creen.**a**vail**W**idth |
| `wsah` | `window.screen.availHeight`                                                              |
| `wsw`  | `window.screen.width`                                                                    |
| `wsh`  | `window.screen.height`                                                                   |
| `wlh`  | `window.location.href`                                                                   |
| `wlhn` | `window.location.hostname`                                                               |
| `wlp`  | `window.location.pathname`                                                               |
| `wlpr` | `window.location.protocol`                                                               |
| `wls`  | `window.location.assign(url)`                                                            |
| `whb`  | `window.history.back();`                                                                 |
| `whf`  | `window.history.forward();`                                                              |
| `wnl`  | `window.navigator.language`                                                              |
| `wnls` | `window.navigator.languages`                                                             |
| `wnu`  | `window.navigator.userAgent`                                                             |

### Console

| Prefix | Body                                  | Description             |
| :----- | ------------------------------------- | ----------------------- |
| `cd`   | `console.dir();`                      | **c**onsole.**d**ir     |
| `ce`   | `console.error();`                    |                         |
| `celb` | `console.error('labele', );`          |                         |
| `ci`   | `console.info();`                     |                         |
| `clg`  | `console.log();`                      | **c**onsole.**l**o**g** |
| `clgl` | `console.log('', );`                  |                         |
| `cw`   | `console.warn();`                     |                         |
| `cwl`  | `console.warn('', );`                 |                         |
| `ca`   | `console.assert(expression, object);` |                         |
| `cc`   | `console.clear();`                    |                         |
| `cco`  | `console.count(label);`               |                         |
| `cg`   | `console.group('label');`             |                         |
| `cge`  | `console.groupEnd();`                 |                         |
| `ct`   | `console.table(object);`              |                         |
| `ctr`  | `console.trace(object);`              |                         |

### Common Js/Node.js

| Prefix | Body                                                           | Description |
| :----- | -------------------------------------------------------------- | ----------- |
| `ec`   | `class name { constructor (params) { }} module.exports = name` |             |
| `em`   | `exports.member = value`                                       |             |
| `me`   | `module.exports = name`                                        |             |
| `rq`   | `require('module')`                                            |             |
| `crq`  | `const module = require('module');`                            |             |

### Bdd Testing (Mocha, Jasmine, etc.)

| Prefix | Body                                             |
| :----- | ------------------------------------------------ |
| `desc` | `describe('description', function () { })`       |
| `cont` | `context('description', callback);`              |
| `it`   | `it('description', () => { })`                   |
| `ita`  | `it('description', async (done) => { done();});` |
| `afe`  | `afterEach(function () { })`                     |
| `bfe`  | `beforeEach(function () { })`                    |
| `aft`  | `after(function () { })`                         |
| `bf`   | `before(function () { })`                        |

## License

MIT License

---

`placeholder` → `placeholder`: `(\$\{\d+)(:?)([a-zA-Z0-9]*)(\}{1})` → `$3`

```
^\n  → \\n\n
\s{2} → \\t
" → '
(^) → "
($) → ",
```
