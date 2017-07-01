import { pluck, append, assoc } from "ramda";
import { delay } from "redux-saga";

import {
  put,
  takeLatest,
  takeEvery,
  all,
  select,
  call
} from "redux-saga/effects";

import { FETCH_MESSAGES_REQUEST, ADD_MESSAGE_REQUEST } from "./constants";

import { getTopic } from "../topic/selectors";

import {
  fetchMessageSuccess,
  fetchMessageFailure,
  addMessageSuccess,
  addMessageFailure
} from "./actions";

function* fetchMessagesSaga() {
  // backend emulation

  try {
    yield delay(1000);

    const topic = yield select(getTopic);

    const rawDB = localStorage.getItem("chatter-db");
    const db = JSON.parse(rawDB) || {};
    const messages = db[topic] || [];

    yield put(fetchMessageSuccess(messages));
  } catch (error) {
    console.log(error);

    yield put(fetchMessageFailure());
  }
}

function* addMessageSaga({ payload: { author, text } }) {
  // backend emulation
  console.log("hello");

  try {
    yield delay(200);

    const topic = yield select(getTopic);

    const rawDB = localStorage.getItem("chatter-db");

    const db = JSON.parse(rawDB) || {};
    const messages = db[topic] || [];

    const newID = Math.max(-1, ...pluck("id", messages)) + 1;
    const newMessage = { id: newID, text, author };

    const newMessages = append(newMessage, messages);
    const newDB = assoc(topic, newMessages, db);
    const newRawDB = JSON.stringify(newDB);

    localStorage.setItem("chatter-db", newRawDB);

    yield put(addMessageSuccess(newMessage));
  } catch (error) {
    console.log(error);

    yield put(addMessageFailure());
  }
}

export default function*() {
  yield all([
    takeLatest(FETCH_MESSAGES_REQUEST, fetchMessagesSaga),
    takeLatest(ADD_MESSAGE_REQUEST, addMessageSaga)
  ]);
}
