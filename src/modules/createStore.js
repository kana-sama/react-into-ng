import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducer";
import saga from "./saga";

export default function() {
  const reduxDevtoolsMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__;
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer,
    compose(
      applyMiddleware(sagaMiddleware),
      reduxDevtoolsMiddleware && reduxDevtoolsMiddleware()
    )
  );

  sagaMiddleware.run(saga);

  return store;
}
