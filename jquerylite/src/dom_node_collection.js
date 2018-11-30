class DOMNodeCollection {
  constructor(HTMLElements){
    this.elements = HTMLElements;
  }
  
  each (callback) {
    this.elements.forEach(callback);
  }
}

DOMNodeCollection.prototype.html = function(string = ""){
  if (string) {
    this.each((el) => {
      el.innerHTML = string;
    });
  } else {
    return this.elements[0].innerHTML;
  }
};

DOMNodeCollection.prototype.empty = function() {
  this.each((el) => {
    console.log(el);
    el.innerHTML = "";
  });
};

DOMNodeCollection.prototype.append = function(selector) {
  if (selector instanceof HTMLElement || typeof selector === 'string') {
    this.each((el) =>  {
      console.log(el);
      el.append(selector);
    });
  } else if (selector instanceof DOMNodeCollection) {
    
  }
};

DOMNodeCollection.prototype.attr = function(attrName, value = "") {
  if (value) {
    this.each(el => {
      el.setAttribute(attrName, value);
    });
  } else {
    return this.elements[0].getAttribute(attrName);
  }
};

DOMNodeCollection.prototype.addClass = function(className) {
  this.each(el => {
    el.classList.add(className);
  });
};

DOMNodeCollection.prototype.removeClass = function(className) {
  this.each(el => {
    el.classList.remove(className);
  });
};

DOMNodeCollection.prototype.children = function() {
  const children = [];
  this.each(el => {
    children.push(el.children);
  });
  return new DOMNodeCollection(children);
};

DOMNodeCollection.prototype.parent = function() {
  const parents = [];
  this.each(el => {
    let parent = el.parentNode;
    if (!parents.includes(parent)) {
      parents.push(parent);
    }
  });
  return new DOMNodeCollection(parents);
};

DOMNodeCollection.prototype.find = function(selector) {
  let foundNodes = [];
  this.each(el => {
    
  });
  return foundNodes;
};

module.exports = DOMNodeCollection;




