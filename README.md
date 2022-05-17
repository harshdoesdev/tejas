# Tejas
<img src="https://raw.githubusercontent.com/rwbeast/tez-dom/master/logo.svg" width="128px" height="128px">

A Tiny DOM Manipulation Library.

## Usage

### Querying elements

```javascript
import { qs, qsa } from './tejas.js';

const elem = qs("#test"); // document.querySelector

const elems = qsa("div"); // document.querySelectorAll
```

### Creating elements

```javascript
import { el } from './tejas.js';

const btn = el('button'); // Output: <button></button>

const foo = el('.class1.class2#foo'); // Output: <div id="foo" class="class1 class2"></div>

const svgEl = svg('svg'); // for creating SVG elements
const path = svg('path');
```
**Note:** When you have to append an element to the DOM that's going to contain several other child elements, 
you should first append its child nodes to a `DocumentFragment` and append the childnodes
to it first and then to the parent element.

**Example:**
```javascript
import { el, frag } from './tejas.js';

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
import { on, off, ready } from './tejas.js';

const greet = () => console.log("hello world");

on(button, "click", greet); // addEventListener

off(button, "click", greet); // removeEventListener

ready(() => {
  // Your code which you want to run after the DOM has loaded.
});
```
### Attributes and CSS styling

```javascript
import { setStyle, attr } from './tejas.js';

setStyle(elem, { color: "red", background: "blue" }); // adding multiple styles to an element

console.log(attr(elem, "id")); // getAttribute

attr(elem, "id", "test"); // setAttribute

attr(elem, "disabled", false); // removeAttribute
```
Made With **&hearts;** in Bharat
