# tez.js
<img src="https://raw.githubusercontent.com/rwbeast/tez.js/master/logo.svg" width="128px" height="128px">
A Tiny DOM Manipulation Library. Tez means fast in Hindi.

It simplifies simple tasks like:

### Querying elements

```javascript
import { qs, qsa } from './tez.js';

const elem = qs("#test"); // document.querySelector

const elems = qsa("div"); // document.querySelectorAll
```

### Creating elements

```javascript
import { el } from './tez.js';

const btn = el('button'); // Output: <button></button>

const foo = el('.class1.class2#foo'); // Output: <div id="foo" class="class1 class2"></div>
```
**Note:** When you have to append an element that's going to contains several other child elements, 
you should first append its child nodes to a DocumentFragment, which you can create using the frag() function included in the library.

**Example:**
```javascript
import { el, frag } from './tez.js';

const createItem = task => {
  
  const item = el('.item');
  
  item.textContent = task;
  
  return item;

};

const createList = tasks => {
  
  const list = el('.list');

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
import { on, off, ready } from './tez.js';

const greet = () => console.log("hello world");

on(button, "click", greet); // addEventListener

off(button, "click", greet); // removeEventListener

ready(() => {
  // Your code which you want to run after the DOM has loaded.
});
```
### Attributes and CSS styling

```javascript
import { style, attr } from './tez.js';

style(elem, { color: "red", background: "blue" }); // adding multiple styles to an element

console.log(attr(elem, "id")); // getAttribute

attr(elem, "id", "test"); // setAttribute

attr(elem, "disabled", false); // removeAttribute
```
