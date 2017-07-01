import { SET_TOPIC } from "./constants";

const initialState = 0;

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TOPIC: {
      const { topic } = action.payload;

      return topic;
    }

    default: {
      return state;
    }
  }
}
