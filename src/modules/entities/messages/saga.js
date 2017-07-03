import { filter, propEq, pipe } from "ramda";

import {
  takeLatest,
  takeEvery,
  select,
  call,
  fork,
  put,
  all
} from "redux-saga/effects";

import { MESSAGES_FETCH_REQUEST, MESSAGE_ADD_REQUEST } from "./constants";

import {
  fetchMessages,
  fetchMessageSuccess,
  fetchMessageFailure,
  addMessageSuccess,
  addMessageFailure
} from "./actions";

import { getDocID } from "../../doc/selectors";
import { throwError } from "../../errors/actions.js";

import fetchFromDB from "../../../utils/fetchFromDB";
import fetchToDB from "../../../utils/fetchToDB";
import normalizeList from "../../../utils/normalizeList";

function* initializeSaga() {
  yield put(fetchMessages());
}

function* fetchMessagesSaga() {
  try {
    const allMessages = yield call(fetchFromDB, "messages");
    const docID = yield select(getDocID);

    // prettier-ignore
    const messages = pipe(
      filter(propEq("docID", docID)),
      normalizeList
    )(allMessages);

    yield put(fetchMessageSuccess(messages));
  } catch (error) {
    yield put(throwError("Error fetching messages", error));
    yield put(fetchMessageFailure());
  }
}

function* addMessageSaga({ payload: { authorID, text } }) {
  try {
    const docID = yield select(getDocID);
    const message = { authorID, text, docID };
    const newMessage = yield call(fetchToDB, "messages", message);

    yield put(addMessageSuccess(newMessage));
  } catch (error) {
    yield put(throwError("Error adding message", error));
    yield put(addMessageFailure());
  }
}

export default function*() {
  yield all([
    fork(initializeSaga),
    takeLatest(MESSAGES_FETCH_REQUEST, fetchMessagesSaga),
    takeLatest(MESSAGE_ADD_REQUEST, addMessageSaga)
  ]);
}
