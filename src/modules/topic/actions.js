import { SET_TOPIC } from "./constants";

export const setTopic = topic => ({
  type: SET_TOPIC,
  payload: { topic }
});
