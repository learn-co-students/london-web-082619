setInterval(() => {
  store.dispatch({ type: ACTION_TYPES.COUNT_UP });
}, 1000);

document
  .querySelector("button")
  .addEventListener("click", () =>
    store.dispatch({ type: ACTION_TYPES.COUNT_UP })
  );
document
  .querySelector("#down")
  .addEventListener("click", () =>
    store.dispatch({ type: ACTION_TYPES.COUNT_DOWN })
  );

document.addEventListener("keydown", e => {
  // e.key
  store.dispatch({ type: ACTION_TYPES.KEY_PRESS, keyValue: e.key });
});
