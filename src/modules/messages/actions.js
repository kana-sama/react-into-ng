import {
  FETCH_MESSAGES_REQUEST,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  ADD_MESSAGE_REQUEST,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_FAILURE
} from "./constants";

export const fetchMessages = () => ({
  type: FETCH_MESSAGES_REQUEST
});

export const fetchMessageSuccess = messages => ({
  type: FETCH_MESSAGES_SUCCESS,
  payload: { messages }
});

export const fetchMessageFailure = () => ({
  type: FETCH_MESSAGES_FAILURE
});

export const addMessage = (author, text) => ({
  type: ADD_MESSAGE_REQUEST,
  payload: { author, text }
});

export const addMessageSuccess = message => ({
  type: ADD_MESSAGE_SUCCESS,
  payload: { message }
});

export const addMessageFailure = () => ({
  type: ADD_MESSAGE_FAILURE
});
