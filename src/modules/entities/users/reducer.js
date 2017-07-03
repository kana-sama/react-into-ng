import { combineReducers } from "redux";

import {
  USERS_FETCH_REQUEST,
  USERS_FETCH_SUCCESS,
  USERS_FETCH_FAILURE
} from "./constants";

function areFetching(state = false, action) {
  switch (action.type) {
    case USERS_FETCH_REQUEST: {
      return true;
    }

    case USERS_FETCH_SUCCESS:
    case USERS_FETCH_FAILURE: {
      return false;
    }

    default: {
      return state;
    }
  }
}

function entities(state = {}, action) {
  switch (action.type) {
    case USERS_FETCH_SUCCESS: {
      const { users } = action.payload;

      return users;
    }

    default: {
      return state;
    }
  }
}

export default combineReducers({
  areFetching,
  entities
});
