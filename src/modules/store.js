import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducer";
import saga from "./saga";

export default function createChatterStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(saga);

  return store;
}
