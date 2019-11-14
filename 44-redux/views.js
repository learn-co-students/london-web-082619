const renderPageFromState = state => {
  document.querySelector("#counter-value").innerText = state.counter;
  document.querySelector("#key-value").innerText = state.key;
};
