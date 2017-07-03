import { DOC_SET } from "./constants";

export const setDoc = doc => ({
  type: DOC_SET,
  payload: { doc }
});
