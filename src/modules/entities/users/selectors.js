import { createSelector } from "reselect";
import { path, prop, values, compose, head } from "ramda";

import getProps from "../../getProps";

// Base selectors

const getUsersRoot = path(["entities", "users"]);

// prettier-ignore
export const getUsersEntities = createSelector(
  [getUsersRoot],
  prop("entities")
);

export const getAreUsersFetching = createSelector(
  [getUsersRoot],
  prop("areFetching")
);

// Complex selectors

export const getUser = createSelector(
  [getUsersEntities, getProps],
  (entities, { userID }) => entities[userID]
);

// prettier-ignore
export const getUsersList = createSelector(
  [getUsersEntities],
  values
);

export const getFirstUserID = createSelector(
  [getUsersList],
  compose(prop("id"), head)
);
