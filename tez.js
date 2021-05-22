/* tez.js | Tez.js Contributors | MIT License */

const doc = document;

const selectorRegex = /(?=\.)|(?=#)/;

const parseSelector = selector => {
  const tokens = selector.split(selectorRegex);

  return tokens.reduce((output, token) => {

    switch (token[0]) {
      case '.':
        output.className.push(token.slice(1));
        break;
      case '#':
        output.id = token.slice(1);
        break;
      default:
        output.tag = token;
        break;
    }

    return output;
  }, { className: [] });
};

const el = (selector, attributes = {}, ...children) => {
  const { tag = 'div', id, className } = parseSelector(selector);
  const element = doc.createElement(tag);

  if (id) 
    element.id = id;

  if (className.length) 
    element.className = className.join(' ');

  if (attributes) 
    Object.assign(element, attributes);

  if (children.length) {
    const fragment = doc.createDocumentFragment();
    fragment.append(...children);
    element.appendChild(fragment);
  }

  return element;
};

export const qs = (selectors, ctx = doc) => ctx.querySelector(selectors);

export const qsa = (selectors, ctx = doc) => ctx.querySelectorAll(selectors);

export const style = (element, styleObj) => Object.assign(element.style, styleObj);

export const attr = (element, attributeName, value) => {
  if (value === undefined)
    return element.getAttribute(attributeName);
  
  if (value === false) {
    element.removeAttribute(attributeName);
  } else {
    element.setAttribute(attributeName, value);
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
