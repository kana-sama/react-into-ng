import { all, fork } from "redux-saga/effects";

import messages from "./messages/saga";
import users from "./users/saga";

export default function*() {
  // prettier-ignore
  yield all([
    fork(messages),
    fork(users)
  ]);
}
