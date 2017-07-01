import { createSelector } from "reselect";
import { prop, reverse } from "ramda";

import getProps from "../utils/getProps";

// Base selectors

const getMessagesModule = prop("messages");

// prettier-ignore
export const getMessagesIDs = createSelector(
  [getMessagesModule],
  prop("ids")
);

// prettier-ignore
export const getMessagesEntities = createSelector(
  [getMessagesModule],
  prop("entities")
);

export const getIsMessagesFetching = createSelector(
  [getMessagesModule],
  prop("isFetching")
);

export const getIsMessagePosting = createSelector(
  [getMessagesModule],
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
export const getMessageAuthor = createSelector(
  [getMessage],
  prop("author")
);
