import { createStore } from "redux";

const init = {
  count: 0,
};

const reducer = function (state = init, action) {
  if (action.type === "increase") {
    return {
      count: ++state.count,
    };
  } else if (action.type === "decrease") {
    return { count: --state.count };
  }
};
let store = createStore(reducer);

export default store;
