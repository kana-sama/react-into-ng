import {
  MESSAGES_FETCH_REQUEST,
  MESSAGES_FETCH_SUCCESS,
  MESSAGES_FETCH_FAILURE,
  MESSAGE_ADD_REQUEST,
  MESSAGE_ADD_SUCCESS,
  MESSAGE_ADD_FAILURE
} from "./constants";

export const fetchMessages = () => ({
  type: MESSAGES_FETCH_REQUEST
});

export const fetchMessageSuccess = messages => ({
  type: MESSAGES_FETCH_SUCCESS,
  payload: { messages }
});

export const fetchMessageFailure = () => ({
  type: MESSAGES_FETCH_FAILURE
});

export const addMessage = (authorID, text) => ({
  type: MESSAGE_ADD_REQUEST,
  payload: { authorID, text }
});

export const addMessageSuccess = message => ({
  type: MESSAGE_ADD_SUCCESS,
  payload: { message }
});

export const addMessageFailure = () => ({
  type: MESSAGE_ADD_FAILURE
});
