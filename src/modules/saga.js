import { all, fork } from "redux-saga/effects";

import messages from "./messages/saga";

export default function*() {
  // prettier-ignore
  yield all([
    fork(messages)
  ]);
}
