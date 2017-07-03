import { combineReducers } from "redux";

import entities from "./entities/reducer";
import doc from "./doc/reducer";
import errors from "./errors/reducer";

export default combineReducers({
  entities,
  doc,
  errors
});
