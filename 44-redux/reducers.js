const counter = (counter = defaultState.counter, action) => {
  if (action.type === ACTION_TYPES.COUNT_UP) return counter + 1;
  else if (action.type === ACTION_TYPES.COUNT_DOWN) return counter - 1;
  else return counter;
};

const key = (key = defaultState.key, action) => {
  if (action.type === ACTION_TYPES.KEY_PRESS) return action.keyValue;
  return key;
};

const defaultState = { counter: 0, key: "press a key!" };

const reducer = (state = defaultState, action) => {
  if (action.type === ACTION_TYPES.COUNT_UP)
    return {
      ...state,
      counter: state.counter + 1
    };
  else if (action.type === ACTION_TYPES.COUNT_DOWN)
    return {
      ...state,
      counter: state.counter - 1
    };
  else if (action.type === ACTION_TYPES.KEY_PRESS)
    return {
      ...state,
      key: action.keyValue
    };
  return state;
};
