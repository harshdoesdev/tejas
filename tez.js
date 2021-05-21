/* tez.js | Created By Harsh Singh | MIT License */

const doc = document;

export const qs = (selectors, ctx = doc) => ctx.querySelector(selectors);

export const qsa = (selectors, ctx = doc) => ctx.querySelectorAll(selectors);

export const style = (el, obj) => Object.assign(el.style, obj);

export const attr = (el, attributeName, value) => {
  if (value == null)
    return el.getAttribute(attributeName);
  
  if (value == false) {
    el.removeAttribute(attributeName);
  } else {
    el.setAttribute(attributeName, value);
  }
};

export const on = (el, evt, hand) => el.addEventListener(evt, hand, false);

export const off = (el, evt, hand) => el.removeEventListener(evt, hand, false);

export const ready = app => {
  if (/complete|loaded|interactive/.test(doc.readyState) && doc.body) {
    setTimeout(app, 1);
  } else {
    on(doc, 'DOMContentLoaded', app);
  }
};
