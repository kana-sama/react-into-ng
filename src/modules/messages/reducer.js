import { combineReducers } from "redux";
import { pluck, assoc, append } from "ramda";

import normalizeList from "../../utils/normalizeList";

import {
  FETCH_MESSAGES_REQUEST,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  ADD_MESSAGE_REQUEST,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_FAILURE
} from "./constants";

function isFetching(state = false, action) {
  switch (action.type) {
    case FETCH_MESSAGES_REQUEST: {
      return true;
    }

    case FETCH_MESSAGES_SUCCESS:
    case FETCH_MESSAGES_FAILURE: {
      return false;
    }

    default: {
      return state;
    }
  }
}

function isPosting(state = false, action) {
  switch (action.type) {
    case ADD_MESSAGE_REQUEST: {
      return true;
    }

    case ADD_MESSAGE_SUCCESS:
    case ADD_MESSAGE_FAILURE: {
      return false;
    }

    default: {
      return state;
    }
  }
}

function ids(state = [], action) {
  switch (action.type) {
    case FETCH_MESSAGES_SUCCESS: {
      const { messages } = action.payload;

      return pluck("id", messages);
    }

    case ADD_MESSAGE_SUCCESS: {
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
    case FETCH_MESSAGES_SUCCESS: {
      const { messages } = action.payload;

      return normalizeList(messages);
    }

    case ADD_MESSAGE_SUCCESS: {
      const { message } = action.payload;

      return assoc(message.id, message, state);
    }

    default: {
      return state;
    }
  }
}

export default combineReducers({
  isFetching,
  isPosting,
  ids,
  entities
});
