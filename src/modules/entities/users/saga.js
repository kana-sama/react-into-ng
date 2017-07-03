import { takeLatest, call, fork, put, all } from "redux-saga/effects";

import { USERS_FETCH_REQUEST } from "./constants";

import { fetchUsers, fetchUsersSuccess, fetchUsersFailure } from "./actions";

import { throwError } from "../../errors/actions.js";

import fetchFromDB from "../../../utils/fetchFromDB";
import fetchToDB from "../../../utils/fetchToDB";
import normalizeList from "../../../utils/normalizeList";

function* initializeSaga() {
  yield put(fetchUsers());
}

function* fetchUsersSaga() {
  try {
    const rawUsers = yield call(fetchFromDB, "users");
    const users = normalizeList(rawUsers);

    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(throwError("Error fetching users", error));
    yield put(fetchUsersFailure());
  }
}

export default function*() {
  yield all([
    fork(initializeSaga),
    takeLatest(USERS_FETCH_REQUEST, fetchUsersSaga)
  ]);
}
