# tez.js
A Tiny Dom Manipulation Library

it simplifies simple tasks like

# querying elements

```javascript
  
  import { qs, qsa } from './tez.js';
  
  const el = qs("#test"); // document.querySelector
  
  const els = qsa("div"); // document.querySelectorAll

```

# managing events

```javascript 

  import { on, off, ready } from './tez.js';
  
  const greet = () => console.log("hello world);
  
  on(button, "click", greet); // addEventListener
  
  off(button, "click", greet); // removeEventListener
  
  ready(() => {
  
    // your code that you want to run after the dom has loaded
  
  });

```
# and

```javascript
  
   import { style, attr } from './tez.js';
   
   style(el, { color: "red", background: "blue" }); // adding multiple styles to an element
   
   console.log(attr(el, "id")); // getAttribute
   
   attr(el, "id", "test"); // setAttribute
  
```
