import { combineReducers } from "redux";
import { assoc, append, pluck, values } from "ramda";

import {
  MESSAGES_FETCH_REQUEST,
  MESSAGES_FETCH_SUCCESS,
  MESSAGES_FETCH_FAILURE,
  MESSAGE_ADD_REQUEST,
  MESSAGE_ADD_SUCCESS,
  MESSAGE_ADD_FAILURE
} from "./constants";

function areFetching(state = false, action) {
  switch (action.type) {
    case MESSAGES_FETCH_REQUEST: {
      return true;
    }

    case MESSAGES_FETCH_SUCCESS:
    case MESSAGES_FETCH_FAILURE: {
      return false;
    }

    default: {
      return state;
    }
  }
}

function isPosting(state = false, action) {
  switch (action.type) {
    case MESSAGE_ADD_REQUEST: {
      return true;
    }

    case MESSAGE_ADD_SUCCESS:
    case MESSAGE_ADD_FAILURE: {
      return false;
    }

    default: {
      return state;
    }
  }
}

function ids(state = [], action) {
  switch (action.type) {
    case MESSAGES_FETCH_SUCCESS: {
      const { messages } = action.payload;

      return pluck("id", values(messages));
    }

    case MESSAGE_ADD_SUCCESS: {
      const { message: { id } } = action.payload;

      return append(id, state);
    }

    default: {
      return state;
    }
  }
}

function entities(state = {}, action) {
  switch (action.type) {
    case MESSAGES_FETCH_SUCCESS: {
      const { messages } = action.payload;

      return messages;
    }

    case MESSAGE_ADD_SUCCESS: {
      const { message } = action.payload;

      return assoc(message.id, message, state);
    }

    default: {
      return state;
    }
  }
}

export default combineReducers({
  areFetching,
  isPosting,
  ids,
  entities
});
