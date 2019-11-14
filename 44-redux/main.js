const combinedReducers = Redux.combineReducers({
  counter,
  key
});

const store = Redux.createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
window.ReduxStore = store;

store.subscribe(() => {
  const state = store.getState();
  renderPageFromState(state);
});
