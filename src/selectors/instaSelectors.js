import { createSelector } from "reselect";

const instagramSelector = state => state.instagram.instagram_list;

export const getInstagramList = createSelector(
  instagramSelector,
  state => state
);
