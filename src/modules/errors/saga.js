import { takeEvery, call } from "redux-saga/effects";

import { ERRORS_THROW } from "./constants";

function* logErrors({ payload: { errorMessage, errorInstance } }) {
  yield call([console, "error"], errorMessage, errorInstance);
}

export default function*() {
  yield takeEvery(ERRORS_THROW, logErrors);
}
