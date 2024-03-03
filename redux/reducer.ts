import { LOG_IN, LOG_OUT, RESET_STATE, UserActionTypes } from "./actions";

const initialState = {
  User: {},
};

export default function reducer(state = initialState, action: UserActionTypes) {
  switch (action.type) {
    case RESET_STATE:
      return {};

    case LOG_OUT:
      return {
        state: initialState,
      };
    case LOG_IN:
      return {
        ...state,
        User: action.payload,
      };
    default:
      return state;
  }
}
