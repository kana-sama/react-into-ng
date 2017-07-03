import { DOC_SET } from "./constants";

export default function doc(state = null, action) {
  switch (action.type) {
    case DOC_SET: {
      const { doc } = action.payload;

      return doc;
    }

    default: {
      return state;
    }
  }
}
