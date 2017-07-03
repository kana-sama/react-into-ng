import { createSelector } from "reselect";
import { complement, isEmpty } from "ramda";
import { prop } from "ramda";

export const getErrors = prop("errors");

// prettier-ignore
export const getHasErrors = createSelector(
  [getErrors],
  complement(isEmpty)
);
