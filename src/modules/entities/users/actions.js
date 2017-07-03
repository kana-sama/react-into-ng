import {
  USERS_FETCH_REQUEST,
  USERS_FETCH_SUCCESS,
  USERS_FETCH_FAILURE
} from "./constants";

export const fetchUsers = () => ({
  type: USERS_FETCH_REQUEST
});

export const fetchUsersSuccess = users => ({
  type: USERS_FETCH_SUCCESS,
  payload: { users }
});

export const fetchUsersFailure = () => ({
  type: USERS_FETCH_FAILURE
});
