import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { initSagas } from "./initSagas";

import rootReducer from "./reducers";

export const getStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleWares = [sagaMiddleware];

  const composables = [
    applyMiddleware(...middleWares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ];

  const enhancer = compose(...composables);

  const store = createStore(rootReducer, enhancer);

  initSagas(sagaMiddleware);
  return store;
};
