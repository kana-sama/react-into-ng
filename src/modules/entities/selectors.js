import { createSelector } from "reselect";

import { getAreMessagesFetching } from "./messages/selectors";
import { getAreUsersFetching } from "./users/selectors";

export const getAreEntitiesFetching = createSelector(
  [getAreMessagesFetching, getAreUsersFetching],
  (areMessagesFetching, areUsersFetching) =>
    areMessagesFetching || areUsersFetching
);
