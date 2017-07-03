import { createSelector } from "reselect";
import { path, prop, reverse } from "ramda";

import getProps from "../../getProps";

// Base selectors

const getMessagesRoot = path(["entities", "messages"]);

// prettier-ignore
export const getMessagesIDs = createSelector(
  [getMessagesRoot],
  prop("ids")
);

// prettier-ignore
export const getMessagesEntities = createSelector(
  [getMessagesRoot],
  prop("entities")
);

export const getAreMessagesFetching = createSelector(
  [getMessagesRoot],
  prop("areFetching")
);

export const getIsMessagePosting = createSelector(
  [getMessagesRoot],
  prop("isPosting")
);

// Complex selectors

// prettier-ignore
export const getReversedMessagesIDs = createSelector(
  [getMessagesIDs],
  reverse
);

export const getMessage = createSelector(
  [getMessagesEntities, getProps],
  (entities, { messageID }) => entities[messageID]
);

// prettier-ignore
export const getMessageText = createSelector(
  [getMessage],
  prop("text")
);

// prettier-ignore
export const getMessageAuthorID = createSelector(
  [getMessage],
  prop("authorID")
);
