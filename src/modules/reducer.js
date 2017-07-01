import { combineReducers } from "redux";

import messages from "./messages/reducer";
import topic from "./topic/reducer";

export default combineReducers({
  messages,
  topic
});
