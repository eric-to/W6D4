const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = function thisthing(onearg){
  console.log(onearg);
};

function $l(selector) {
  let allEls;
  if (selector instanceof HTMLElement) {
    allEls = new DOMNodeCollection(Array.from(document.querySelector(selector)));
  } else if (typeof selector === 'string') {
    allEls = new DOMNodeCollection(Array.from(document.querySelectorAll(selector)));
  }
  return allEls;
}

window.$l = $l;