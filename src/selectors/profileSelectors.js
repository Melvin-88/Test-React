import { createSelector } from "reselect";

const profileSelector = state => state.profile.user_profile;

export const userProfileSelector = createSelector(
  profileSelector,
  state => state
);
