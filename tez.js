/* tez.js | Tez.js Contributors | MIT License */

const doc = document;

export const qs = (selectors, ctx = doc) => ctx.querySelector(selectors);

export const qsa = (selectors, ctx = doc) => ctx.querySelectorAll(selectors);

export const style = (el, obj) => Object.assign(el.style, obj);

export const attr = (el, attributeName, value) => {
  if (value === undefined)
    return el.getAttribute(attributeName);
  
  if (value === false) {
    el.removeAttribute(attributeName);
  } else {
    el.setAttribute(attributeName, value);
  }
};

export const on = (element, type, handler) => element.addEventListener(type, handler, false);

export const off = (element, type, handler) => element.removeEventListener(type, handler, false);

export const ready = app => {
  if (/complete|loaded|interactive/.test(doc.readyState) && doc.body) {
    setTimeout(app, 1);
  } else {
    on(doc, 'DOMContentLoaded', app);
  }
};
