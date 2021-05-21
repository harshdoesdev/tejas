# tez.js
A tiny DOM manipulation library. Tez means fast in Hindi.

It simplifies simple tasks like:

### Querying elements

```javascript
import { qs, qsa } from './tez.js';

const el = qs("#test"); // document.querySelector

const els = qsa("div"); // document.querySelectorAll
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

style(el, { color: "red", background: "blue" }); // adding multiple styles to an element

console.log(attr(el, "id")); // getAttribute

attr(el, "id", "test"); // setAttribute

attr(el, "disabled", false); // removeAttribute
```
