# tez-dom
<img src="https://raw.githubusercontent.com/rwbeast/tez-dom/master/logo.svg" width="128px" height="128px">

![GitHub file size in bytes](https://img.shields.io/github/size/rwbeast/tez-dom/dist/tez-dom.min.js)

A Tiny DOM Manipulation Library. Tez means fast in Hindi.

## Install
tez-dom is a Native Javascript Module which you can import in your project.

**From NPM:**
```js
npm i tez-dom
```

**From CDN:**
```javascript
import { ready, qs, on } from 'https://cdn.jsdelivr.net/gh/rwbeast/tez-dom/dist/tez-dom.min.js';

const initApp = () => {

  const btn = qs('#btn');
  
  const greet = () => console.log('Hello world');
  
  on(btn, 'click', greet);

};

ready(initApp);
```

## Usage

### Querying elements

```javascript
import { qs, qsa } from './tez-dom.js';

const elem = qs("#test"); // document.querySelector

const elems = qsa("div"); // document.querySelectorAll
```

### Creating elements

```javascript
import { el } from './tez-dom.js';

const btn = el('button'); // Output: <button></button>

const foo = el('.class1.class2#foo'); // Output: <div id="foo" class="class1 class2"></div>

const svg = el('svg', true); // for creating SVG elements, pass true as the second argument

const path = el('path', true);
```
**Note:** When you have to append an element to the DOM that's going to contain several other child elements, 
you should first append its child nodes to a `DocumentFragment`, which you can create using the `frag()` function included in the library. and append the childnodes
to it first and then to the parent element.

**Example:**
```javascript
import { el, frag } from './tez-dom.js';

const createItem = task => {
  const item = el('li.item');
  item.textContent = task;
  
  return item;
};

const createList = tasks => {
  const list = el('ul.list');
  const items = tasks.map(createItem);
  const fragment = frag();

  fragment.append(...items);
  list.appendChild(fragment);
  
  return list;
};

document.body.appendChild(createList(['Buy Milk', 'Buy Tea', 'Water Plants']));
```

### Handling events

```javascript 
import { on, off, ready } from './tez-dom.js';

const greet = () => console.log("hello world");

on(button, "click", greet); // addEventListener

off(button, "click", greet); // removeEventListener

ready(() => {
  // Your code which you want to run after the DOM has loaded.
});
```
### Attributes and CSS styling

```javascript
import { style, attr } from './tez-dom.js';

style(elem, { color: "red", background: "blue" }); // adding multiple styles to an element

console.log(attr(elem, "id")); // getAttribute

attr(elem, "id", "test"); // setAttribute

attr(elem, "disabled", false); // removeAttribute
```
Made With **&hearts;** in Bharat
