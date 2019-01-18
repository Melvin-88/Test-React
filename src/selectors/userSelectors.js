import { createSelector } from "reselect";

const userSelector = state => state.user.user_info;

export const userInfoSelector = createSelector(
  userSelector,
  state => state
);

const userAuthLoaderSelector = state => state.user.auth_loader;
export const getUserAuthLoaderSelector = createSelector(
  userAuthLoaderSelector,
  state => state
);

const messageSelector = state => state.user.user_message;
export const userMessageSelector = createSelector(
  messageSelector,
  state => state
);
