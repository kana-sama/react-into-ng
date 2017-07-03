import { combineReducers } from "redux";

import messages from "./messages/reducer";
import users from "./users/reducer";

export default combineReducers({
  messages,
  users
});
