import * as actions from "../actions/users";
import { handleActions } from "redux-actions";
import { isEmpty } from "../validation/is-empty";
const initialState = {
  isAuthenticated: false,
  user_info: null
};

const UserReducer = handleActions(
  {
    [actions.setUser]: (state, { payload }) => ({
      ...state,
      isAuthenticated: !isEmpty(payload),
      user_info: payload
    })
  },
  initialState
);

export default UserReducer;
