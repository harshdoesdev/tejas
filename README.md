# tez.js
A tiny DOM manipulation library. Tez means fast in Hindi.

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

const div = el('div.class1.class2#foo'); 
// Output: <div id="foo" class="class1 class2"></div>
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
