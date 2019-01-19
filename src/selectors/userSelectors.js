import { createSelector } from "reselect";

const userSelector = state => state.user.user_info;

export const userInfoSelector = createSelector(
  userSelector,
  state => state
);
