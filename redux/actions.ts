export const LOG_OUT = "LOG_OUT";
export const RESET_STATE = "RESET_STATE";
export const LOG_IN = "LOG_IN";

interface LogInAction {
  type: typeof LOG_IN;
  payload: any;
}

interface LogOutAction {
  type: typeof LOG_OUT;
}

interface ResetStateAction {
  type: typeof RESET_STATE;
}

export function resetState(): ResetStateAction {
  return {
    type: RESET_STATE,
  };
}

export function logOut(): LogOutAction {
  return {
    type: LOG_OUT,
  };
}

export function logIn(state: any): LogInAction {
  return {
    type: LOG_IN,
    payload: state,
  };
}

export type UserActionTypes = LogInAction | LogOutAction | ResetStateAction;
