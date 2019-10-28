const Sam = {
  createElement: function(tag, props = {}) {
    const el = document.createElement(tag)
    if (props.className) el.className = props.className
    if (props.id) el.id = props.id
    if (props.src) el.src = props.src
    if (props.innerText) el.innerText = props.innerText
    if (props.onClick) el.addEventListener('click', props.onClick)
    if (props.children) el.append(...props.children)
    return el
  }
}
