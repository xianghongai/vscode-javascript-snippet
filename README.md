# JavaScript Snippets (Visual Studio Code)

Code snippets for JavaScript in ES3/5/6+ syntax;

Download this extension from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=NicholasHsiang.vscode-javascript-snippet).

## Supported languages (file extensions)

- JavaScript (`.js`)
- TypeScript (`.ts`)
- JavaScript React (`.jsx`)
- TypeScript React (`.tsx`)
- Html (`.html`)
- Vue (`.vue`)

## Snippets

Note: All the snippets include the final semicolon `;`

### declarations

| Prefix | Body                        | Description                          |
|:-------|-----------------------------|--------------------------------------|
| `usm`   | `'use strict';`            | **u**se **s**trict **m**ode          |
| `c`    | `const name = value;`       |                                      |
| `caw`  | `const name = await value;` | **c**onst **aw**aited                |
| `cy`   | `const name = yield value;` |                                      |
| `cdo`  | `const {} = ;`              | **c**onst **d**estructing **o**bject |
| `cda`  | `const [] = ;`              | **c**onst **d**estructing **a**rray  |
| `l`    | `let name = value;`         |                                      |
| `law`  | `let name = await value;`   |                                      |
| `ly`   | `let name = yield value;`   |                                      |
| `ldo`  | `let {} = ;`                |                                      |
| `lda`  | `let [] = ;`                |                                      |
| `v`    | `var name = value;`         |                                      |
| `vdo`  | `var {} = ;`                |                                      |
| `vda`  | `var [] = ;`                |                                      |
| `dp`   | `{}: parameter`             | **d**estructuring **p**arameter      |


### statement

| Prefix | Body                                                               | Description                            |
|:-------|--------------------------------------------------------------------|----------------------------------------|
| `if`   | `if (condition) { }`                                               |                                        |
| `ife`  | `if (condition) { } else { }`                                      |                                        |
| `ei`   | `else if (condition) { }`                                          |                                        |
| `el`   | `else { }`                                                         |                                        |
| `swi`  | `switch () { case  :    break; default:  break;}`                  |                                        |
| `cas`  | `case  :   break;`                                                 |                                        |
| `fin`  | `for (let key in object) { if (object.hasOwnProperty(key)) {   }}` | **f**or-**in**                         |
| `fof`  | `for (let item of object) { }`                                     | **f**or-**of**                         |
| `fl`   | `for (let i = 0, len = iterable.length; i < len; i++) { }`         |                                        |
| `flr`  | `for (let len = iterable.length - 1; len >= 0; len--) { }`         | **f**or **l**oop iterable(**r**everse) |
| `wh`   | `while (condition) { }`                                            |                                        |
| `whi`  | `let iterableIndex = array.lengthwhile (iterableIndexIndex--) { }` |                                        |



### function

| Prefix    | Body                                                                                             | Description                                   |
|:----------|--------------------------------------------------------------------------------------------------|-----------------------------------------------|
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
| `nt`      | `if (typeof new.target === 'undefined') { throw new Error('Fn() must be called with new');}`" ]} |                                               |



### array

| Prefix      | Body                                                              | Description                                      |
|:------------|-------------------------------------------------------------------|--------------------------------------------------|
| `arl`       | `iterable.length;`                                                |                                                  |
| `isa`       | `Array.isArray(value);`                                           |                                                  |
| `arfr`      | `Array.from(arrayLike);`                                          |                                                  |
| `arfr`      | `Array.from(arrayLike, (item) => { });`                           |                                                  |
| `arof`      | `Array.of(elementN);`                                             |                                                  |
| `arc`       | `iterable.concat(valueN);`                                        | **ar**ray.**c**oncat                             |
| `arcw`      | `iterable.copyWithin(target, start, end);`                        | **ar**ray.**c**opy**W**ithin                     |
| `are`       | `iterable.entries();`                                             | **ar**ray.**e**ntries                            |
| `arev`      | `iterable.every((element) => { });`                               | **ar**ray.**ev**ery                              |
| `arfill`    | `iterable.fill(value, start, end);`                               |                                                  |
| `arf`       | `iterable.filter((element) => { });`                              |                                                  |
| `arfi`      | `iterable.find((element) => { });`                                |                                                  |
| `arfin`     | `iterable.findIndex((element) => { });`                           |                                                  |
| `arflat`    | `iterable.flat();`                                                |                                                  |
| `arflatMap` | `iterable.flatMap((value) => value);`                             |                                                  |
| `fea`       | `iterable.forEach((currentValue) => { });`                        | **f**or**E**ach callback with **a**rrow function |
| `feai`      | `iterable.forEach((currentValue, index) => { });`                 |                                                  |
| `fe`        | `iterable.forEach(function(currentValue) { });`                   |                                                  |
| `fei`       | `iterable.forEach(function(currentValue, index) { });`            |                                                  |
| `ari`       | `iterable.includes(valueToFind);`                                 |                                                  |
| `ario`      | `iterable.indexOf(searchElement);`                                |                                                  |
| `arj`       | `iterable.join(separator);`                                       |                                                  |
| `ark`       | `iterable.keys();`                                                |                                                  |
| `arlio`     | `iterable.lastIndexOf(searchElement);`                            |                                                  |
| `map`       | `iterable.map((currentValue) => { });`                            |                                                  |
| `arp`       | `iterable.pop();`                                                 |                                                  |
| `arj`       | `iterable.push(elementN);`                                        |                                                  |
| `arr`       | `iterable.reduce((accumulator, currentValue) => { return });`     |                                                  |
| `arrr`      | `iterable.reduce​Right((accumulator, currentValue) => { return });` |                                                  |
| `arre`      | `iterable.reverse();`                                             |                                                  |
| `ars`       | `iterable.shift();`                                               |                                                  |
| `arsl`      | `iterable.slice(begin, end);`                                     |                                                  |
| `arso`      | `iterable.some((element) => { });`                                |                                                  |
| `arsor`     | `iterable.sort((firstEl, secondEl) => { });`                      |                                                  |
| `arsp`      | `iterable.splice(start, deleteCount, item);`                      |                                                  |
| `aru`       | `iterable.unshift(elementN);`                                     |                                                  |
| `arv`       | `iterable.values();`                                              |                                                  |
| `arsi`      | `iterable[Symbol.iterator]();`                                    |                                                  |
| `seq`       | `[...Array(length).keys()]`                                       |                                                  |


### object

| Prefix   | Body                                                                                                                                                                                                                                                                                   | Description                                                 |
|:---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| `ol`     | `{ key: value }`                                                                                                                                                                                                                                                                       |                                                             |
| `kv`     | `key: value,`                                                                                                                                                                                                                                                                          |                                                             |
| `oa`     | `Object.assign(target, source);`                                                                                                                                                                                                                                                       |                                                             |
| `oc`     | `Object.create(obj);`                                                                                                                                                                                                                                                                  |                                                             |
| `odp`    | `Object.defineProperty(dest, 'propertyName', { value: undefined, configurable: false, enumerable: false, writable: ${10:false}})`                                                                                                                                                      | **O**bject.**d**efine**P**roperty(data descriptors)         |
| `odpa`   | `Object.defineProperty(dest, 'propertyName', { get() {  return value; }, set(newValue) {  value = newValue; }, enumerable: false, configurable: false})`                                                                                                                               | **O**bject.**d**efine**P**roperty(**a**ccessor descriptors) |
| `odps`   | `Object.defineProperties(dest, { propertyName: {  configurable: false,  enumerable: false  value: undefined,  writable: false }, propertyName: {  get() {   return value;  },  set(newValue) {   ${10:value} = newValue;  }  enumerable: ${11:false},  configurable: ${12:false} }});` | **O**bject.**d**efine**P**ropertie**s**                     |
| `oe`     | `Object.entries(obj);`                                                                                                                                                                                                                                                                 |                                                             |
| `of`     | `Object.freeze(obj);`                                                                                                                                                                                                                                                                  |                                                             |
| `ofe`    | `Object.fromEntries(iterable);`                                                                                                                                                                                                                                                        |                                                             |
| `ogopd`  | `Object.getOwnPropertyDescriptor(obj, 'propertyName');`                                                                                                                                                                                                                                | **O**bject.**g**et**O**wn**P**roperty**D**escriptor         |
| `ogopds` | `Object.getOwnPropertyDescriptors(obj);`                                                                                                                                                                                                                                               | **O**bject.**g**et**O**wn**P**roperty**D**escriptor**s**    |
| `ogopn`  | `Object.getOwnPropertyNames(obj);`                                                                                                                                                                                                                                                     | **O**bject.**g**et**O**wn**P**roperty**N**ames              |
| `ogops`  | `Object.getOwnPropertySymbols(obj);`                                                                                                                                                                                                                                                   | **O**bject.**g**et**O**wn**P**roperty**S**ymbols            |
| `ogpo`   | `Object.getPrototypeOf(obj);`                                                                                                                                                                                                                                                          | **O**bject.**g**et**P**rototype**O**f                       |
| `oi`     | `Object.is(value1, value2);`                                                                                                                                                                                                                                                           |                                                             |
| `oie`    | `Object.isExtensible(obj);`                                                                                                                                                                                                                                                            |                                                             |
| `oif`    | `Object.isFrozen(obj);`                                                                                                                                                                                                                                                                |                                                             |
| `ois`    | `Object.isSealed(obj);`                                                                                                                                                                                                                                                                |                                                             |
| `ok`     | `Object.keys(obj);`                                                                                                                                                                                                                                                                    |                                                             |
| `ope`    | `Object.preventExtensions(obj);`                                                                                                                                                                                                                                                       |                                                             |
| `os`     | `Object.seal(obj);`                                                                                                                                                                                                                                                                    |                                                             |
| `ospo`   | `Object.setPrototypeOf(obj, prototype);`                                                                                                                                                                                                                                               | **O**bject.**s**et**P**rototype**O**f                       |
| `ov`     | `Object.values(obj)`                                                                                                                                                                                                                                                                   |                                                             |
| `hop`    | `obj.hasOwnProperty(propertyName);`                                                                                                                                                                                                                                                    | **h**as**O**wn**P**roperty                                  |
| `ipo`    | `prototypeObj.isPrototypeOf(object);`                                                                                                                                                                                                                                                  | **i**s**P**rototype**O**f                                   |
| `pie`    | `obj.propertyIsEnumerable(propertyName);`                                                                                                                                                                                                                                              | **p**roperty**I**s**E**numerable                            |
| `tls`    | `objects.toLocaleString();`                                                                                                                                                                                                                                                            | **t**o**L**ocale**S**tring                                  |
| `ts`     | `objects.toString();`                                                                                                                                                                                                                                                                  | **t**o**S**tring                                            |
| `vo`     | `objects.valueOf();`                                                                                                                                                                                                                                                                   | **v**alue**O**f                                             |


### String

| Prefix  | Body                                     | Description                         |
|:--------|------------------------------------------|-------------------------------------|
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
| `ste`   | `str.trimEnd()/trimRight()`              |                                     |
| `sts`   | `str.trimStart()/trimLeft()`             |                                     |
| `ssi`   | `str[Symbol.iterator]`                   |                                     |


### Number

| Prefix  | Body                        |
|:--------|-----------------------------|
| `ne`    | `Number.EPSILON`            |
| `nmasi` | `Number​.MAX_SAFE_INTEGER`    |
| `nmav`  | `Number.MAX_VALUE`          |
| `nmisi` | `Number​.MIN_SAFE_INTEGER`    |
| `nmav`  | `Number​.MIN_VALUE`           |
| `nni`   | `Number​.NEGATIVE_INFINITY`   |
| `nn`    | `Number​.NaN`                 |
| `npi`   | `Number​.POSITIVE_INFINITY`   |
| `nif`   | `Number​.isFinite(value)`     |
| `nii`   | `Number​.isInteger(value)`    |
| `nin`   | `Number​.isNaN(value)`        |
| `nisi`  | `Number​.isSafe​Integer(value)` |
| `npf`   | `Number​.parse​Float(string)`   |
| `npi`   | `Number​.parseInt(string)`    |
| `nte`   | `number.toExponential()`    |
| `ntf`   | `number.toFixed()`          |
| `ntp`   | `number.toPrecision()`      |


### Regexp

| Prefix | Body                                                            | Description                |
|:-------|-----------------------------------------------------------------|----------------------------|
| `re`   | `let regex1 = RegExp('pattern');`                               | **R**eg**E**xp             |
| `rep`  | `let regex1 = /pattern/;`                                       | **R**eg**E**xp **p**attern |
| `ree`  | `let regex1 = RegExp('pattern');let result = regex1.exec(str);` |                            |
| `ret`  | `let regex1 = RegExp('pattern');let result = regex1.test(str);` |                            |


### chore

| Prefix    | Body                                     | Description                                 |
|:----------|------------------------------------------|---------------------------------------------|
| `to`      | `typeof object === 'undefined'`          | **t**ype**o**f                              |
| `io`      | `object instanceof 'constructor'`        | **i**nstance**o**f                          |
| `st`      | `setTimeout(function() { }, delay);`     | **s**et**T**imeout                          |
| `sta`     | `setTimeout(() => { }, delay);`          | **s**et**T**imeout with **a**rrow function  |
| `si`      | `setInterval(function() { }, interval);` | **s**et**I**nterval                         |
| `sia`     | `setInterval(() => { }, interval);`      | **s**et**I**nterval with **a**rrow function |
| `jp`      | `JSON.parse(obj);`                       |                                             |
| `js`      | `JSON.stringify(obj);`                   |                                             |
| `tc`      | `try { } catch (err) { }`                |                                             |
| `tcf`     | `try { } catch (err) { } finally { }`    |                                             |
| `tf`      | `try { } finally { }`                    |                                             |
| `tne`     | `throw new error`                        |                                             |
| `r`       | `return ;`                               |                                             |
| `rn`      | `return null;`                           |                                             |
| `rt`      | `return this;`                           |                                             |
| `ro`      | `return { };`                            |                                             |
| `ternary` | ` ?  : ;`                                |                                             |
| `al`      | `alert('msg');`                          |                                             |
| `conf`    | `confirm('msg');`                        |                                             |
| `pm`      | `prompt('msg');`                         |                                             |
| `de`      | `debugger;`                              |                                             |
| `eu`      | `encodeURI(URI)`                         | **e**ncode**U**RI                           |
| `du`      | `decodeURI(encodedURI)`                  | **d**ecode**U**RI                           |
| `euc`     | `encodeURIComponent(str)`                | **e**ncode**U**RI**C**omponent              |
| `duc`     | `decodeURIComponent(encodedURI)`         | **d**ecode**U**RI**C**omponent              |


### module

| Prefix   | Body                                                                                         | Description                                 |
|:---------|----------------------------------------------------------------------------------------------|---------------------------------------------|
| `im`     | `import { moduleName } from 'module';`                                                       | **im**port                                  |
| `imd`    | `import moduleName from 'module';`                                                           | **im**port **d**efault export               |
| `imas`   | `import { originalName as alias } from 'module';`                                            | **im**port **as** renamed exports           |
| `imall`  | `import * as alias from 'module';`                                                           | **im**port **all** module as alias          |
| `imn`    | `import 'module';`                                                                           | **im**port without module **n**ame          |
| `ex`     | `export {nameN};`                                                                            | **ex**port                                  |
| `exas`   | `export {variable as name};`                                                                 | **ex**port **as** renaming                  |
| `exl`    | `export let name = value;`                                                                   |                                             |
| `exc`    | `export const name = value;`                                                                 |                                             |
| `exfn`   | `export function name (){ ;}`                                                                |                                             |
| `exafn`  | `export const name = (params) => { $3};`                                                     | **ex**port named **a**rrow **f**u**n**ction |
| `exd`    | `export default expression;`                                                                 | **ex**port **d**efault                      |
| `exdas`  | `export {name as default};`                                                                  |                                             |
| `exdc`   | `export default class className { constructor (params) { } }`                                |                                             |
| `exdce`  | `export default class className extends baseClassName { constructor (params) { super(); } }` |                                             |
| `exdaf`  | `export default (params) => { }`                                                             |                                             |
| `exdfn`  | `export default function name (params) { }`                                                  |                                             |
| `exfr`   | `export {default} from otherModule;`                                                         | **ex**port **fr**om                         |
| `exallo` | `export * from otherModule;`                                                                 | **ex**port **all** from **o**ther module    |


### class

| Prefix | Body                                                                          | Description                   |
|:-------|-------------------------------------------------------------------------------|-------------------------------|
| `cl`   | `class name { constructor (params) { } }`                                     | **cl**ass                     |
| `cle`  | `class className extends baseClassName { constructor (params) { super(); } }` | **cl**ass **e**xtends         |
| `cls`  | `static create(params) { return new PersonClass(params);}`                    | **cl**ass **s**tatic          |
| `cons` | `constructor(params) {   }`                                                   | class **cons**tructor         |
| `gp`   | `get propertyName () { return this.value;}`                                   | **g**et **p**ropertyName      |
| `sp`   | `set propertyName (value) { }`                                                | **s**et **p**ropertyName      |
| `gs`   | `get property () { } set property (value) { }`                                | **g**etter and **s**etter     |
| `m`    | `method (params) { }`                                                         | **m**ethod                    |
| `asm`  | `async method(params) { }`                                                    | **as**ync **m**ethod          |
| `proc` | `var Constructor = function(params) { };`                                     | **pro**totype **c**onstructor |
| `prom` | `Constructor.prototype.method = function (params) { };`                       | **pro**totype **m**ethod      |


### Promise

| Prefix | Body                                                                                                   | Description                                      |
|:-------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| `p`    | `let promise = new Promise((resolve, reject) => { });promise.then(result => { }).catch(error => { });` | new **p**romise                                  |
| `pa`   | `Promise.all([value]);`                                                                                | **P**romise.**a**ll                              |
| `prj`  | `Promise.reject(value);`                                                                               | **P**romise.**r**e**j**ect                       |
| `prs`  | `Promise.resolve(value);`                                                                              | **P**romise.**r**e**s**olve                      |
| `rs`   | `resolve(value);`                                                                                      | **r**e**s**olve                                  |
| `rj`   | `reject(err);`                                                                                         | **r**e**j**ect                                   |
| `pc`   | `promise.catch(error => { });`                                                                         | **p**romise.**c**atch                            |
| `pf`   | `promise.finally(() => { });`                                                                          | **p**romise.**f**inally                          |
| `pt`   | `promise.then(result => { })`                                                                          | **p**romise.**t**hen()                           |
| `ptc`  | `promise.then(result => { }).catch(error => { });`                                                     | **p**romise.**t**hen().**c**atch()               |
| `ptcf` | `promise.then(result => { }).catch(error => { }).finally(() => { });`                                  | **p**romise.**t**hen().**c**atch().**f**inally() |
| `rp`   | `return new Promise((resolve, reject) => { })`                                                         |                                                  |


### Generator Iterator

| Prefix | Body                                | Description                |
|:-------|-------------------------------------|----------------------------|
| `gf`   | `function* name(params) { yield ;}` | **g**enerator **f**unction |
| `y`    | `yield expression;`                 |                            |
| `yg`   | `yield* expression;`                |                            |


### Async

| Prefix   | Body                                                                                                       | Description                                            |
|:---------|------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| `asfn`   | `async function name (params) { const result = await promise; return result;}name().then(result => {$6});` | **as**ync **f**unction **n**amed                       |
| `asfna`  | `async function (params) { }`                                                                              | **as**ync **f**u**n**ction **a**nonymous               |
| `asgfn`  | `async function* name (params) { }`                                                                        | **as**ync **g**enerator **f**unction **n**amed         |
| `asgfna` | `async function* (params) { }`                                                                             | **as**ync **g**enerator **f**u**n**ction **a**nonymous |
| `asaf`   | `async (params) => { }`                                                                                    | **as**ync **a**rrow **f**unction                       |
| `aw`     | `await promiseObj`                                                                                         |                                                        |
| `caw`    | `const result = await promiseObj;`                                                                         |                                                        |
| `awpa`   | `await Promise.all(value)`                                                                                 |                                                        |
| `awpam`  | `await Promise.all(array.map((value) => { }))`                                                             |                                                        |


### Event

| Prefix | Body                                                           | Description                                          |
|:-------|----------------------------------------------------------------|------------------------------------------------------|
| `ael`  | `document.addEventListener('event', function (e) { });`        | **a**dd**E**vent**L**istener                         |
| `aela` | `document.addEventListener('event', ev => { });`               | **a**dd**E**vent**L**istener **a**rrow function      |
| `rel`  | `document.removeEventListener('event', listener);`             | **r**emove**E**vent**L**istener                      |
| `eps`  | `event.preventDefault();event.stopPropagation();return false;` | **e**vent **p**reventDefault and **s**topPropagation |
| `epd`  | `event.preventDefault();`                                      | **e**vent **p**revent**D**efault                     |
| `esp`  | `event.stopPropagation();`                                     | **e**vent **s**top**P**ropagation                    |


### Dom

| Prefix | Body                                        | Description                    |
|:-------|---------------------------------------------|--------------------------------|
| `gi`   | `document.getElementById('id');`            | **g**etElementBy**I**d         |
| `gc`   | `document.getElementsByClassName('class');` | **g**etElementsBy**C**lassName |
| `gt`   | `document.getElementsByTagName('tag');`     | **g**etElementsBy**T**agName   |
| `qs`   | `document.querySelector('selector');`       | **q**uery**S**elector          |
| `qsa`  | `document.querySelectorAll('selector');`    | **q**uery**S**elector**A**ll   |
| `cdf`  | `document.createDocumentFragment();$2`      |                                |
| `cel`  | `document.createElement(elem);`             |                                |
| `ga`   | `document.getAttribute('attr');`            |                                |
| `sa`   | `document.setAttribute('attr', value);`     |                                |
| `ra`   | `document.removeAttribute('attr');`         |                                |
| `ac`   | `document.appendChild(elem);`               |                                |
| `rc`   | `document.removeChild(elem);`               |                                |
| `ih`   | `document.innerHTML = 'elem';`              |                                |
| `tco`  | `document.textContent = 'content';`         |                                |
| `cla`  | `document.classList.add('class');`          | **c**lass**L**ist.**a**dd      |
| `clc`  | `document.classList.contains('class');`     |                                |
| `clr`  | `document.classList.remove('class');`       |                                |
| `clt`  | `document.classList.toggle('class');`       |                                |


### console

| Prefix | Body                                  | Description             |
|:-------|---------------------------------------|-------------------------|
| `cd`   | `console.dir($1);`                    | **c**onsole.**d**ir     |
| `ce`   | `console.error($1);`                  |                         |
| `celb` | `console.error('', );`                |                         |
| `ci`   | `console.info($1);`                   |                         |
| `clg`  | `console.log($1);`                    | **c**onsole.**l**o**g** |
| `clgl` | `console.log('', );`                  |                         |
| `cw`   | `console.warn($1);`                   |                         |
| `cwl`  | `console.warn('', );`                 |                         |
| `ca`   | `console.assert(expression, object);` |                         |
| `cc`   | `console.clear();`                    |                         |
| `cco`  | `console.count(label);`               |                         |
| `cg`   | `console.group(\"label\");`           |                         |
| `cge`  | `console.groupEnd();`                 |                         |
| `ct`   | `console.table(object);`              |                         |
| `ctr`  | `console.trace(object);`              |                         |


### CommonJS/Node.js

| Prefix | Body                                                           | Description |
|:-------|----------------------------------------------------------------|-------------|
| `ec`   | `class name { constructor (params) { }} module.exports = name` |             |
| `em`   | `exports.member = value`                                       |             |
| `me`   | `module.exports = name`                                        |             |
| `rq`   | `require('module')`                                            |             |
| `crq`  | `const module = require('module');`                            |             |


### BDD Testing (Mocha, Jasmine, etc.)

| Prefix | Body                                              |
|:-------|---------------------------------------------------|
| `desc` | `describe('description', function () { })`        |
| `cont` | `context('description', callback);`               |
| `it`   | `it('description', () => { })`                    |
| `ita`  | `it('description', async (done) => {  done();});` |
| `afe`  | `afterEach(function () { })`                      |
| `bfe`  | `beforeEach(function () { })`                     |
| `aft`  | `after(function () { })`                          |
| `bf`   | `before(function () { })`                         |

## License

MIT License

---

TODO: `Set`, `Map`, `Symbol`, `Proxy`, `Reflection`, `Math`, `DOM`, `BOM`, `Error`

---

`${1:placeholder}` → `placeholder`: `(\$\{\d+)(:?)([a-zA-Z0-9]*)(\}{1})` → `$3`