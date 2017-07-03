import { ERRORS_THROW } from "./constants";

export const throwError = (errorMessage, errorInstance) => ({
  type: ERRORS_THROW,
  payload: { errorMessage, errorInstance }
});
