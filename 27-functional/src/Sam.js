const Sam = {
  createElement: function(tag, options = {}) {
    const el = document.createElement(tag);
    if (options.className) el.className = options.className;
    if (options.id) el.id = options.id;
    if (options.src) el.src = options.src;
    if (options.innerText) el.innerText = options.innerText;
    if (options.children) el.append(...options.children);
    return el;
  }
};
