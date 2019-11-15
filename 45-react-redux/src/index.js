import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";

import { createStore } from "redux";

// import { reducers } from './reducers'

const defaultState = {
  bots: [],
  botArmy: []
};

const reducer = (state = defaultState, action) => {
  if (action.type === "ADD_BOTS")
    return {
      ...state,
      bots: [...action.payload.bots]
    };
  if (action.type === "SELECT_BOT")
    return {
      ...state,
      selectedBotId: action.payload.botId
    };
  if (action.type === "DESELECT_BOT")
    return {
      ...state,
      selectedBotId: undefined
    };
  if (action.type === "ENLIST_BOT")
    return {
      ...state,
      botArmy: [...state.botArmy, action.payload.botId]
    };
  if (action.type === "DISCHARGE_BOT")
    return {
      ...state,
      botArmy: state.botArmy.filter(bId => bId !== action.payload.botId)
    };
  return { ...state };
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
