const ACTION_TYPES = {
  COUNT_UP: "COUNT_UP",
  COUNT_DOWN: "COUNT_DOWN",
  KEY_PRESS: "KEY_PRESS"
};

const countUpAction = (increment = 1) => ({
  type: ACTION_TYPES.COUNT_UP,
  payload: { increment }
});
