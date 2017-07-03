import { append } from "ramda";

import { ERRORS_THROW } from "./constants";

export default function errors(state = [], action) {
  switch (action.type) {
    case ERRORS_THROW: {
      const { errorMessage } = action.payload;

      return append(errorMessage, state);
    }

    default: {
      return state;
    }
  }
}
