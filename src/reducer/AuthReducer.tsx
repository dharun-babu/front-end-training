import { ACTIONS } from "../enums/Actions";
import { ActionProps, AuthContextType } from "../utilies/type/Types";

export const AuthReducer = (state: AuthContextType, {type}: ActionProps): AuthContextType => {
  switch (type) {
    case ACTIONS.LOGIN:
      return { ...state, isAuthenticated: true, hasPartialAccess: false };
    case ACTIONS.LOGOUT:
      return { ...state, isAuthenticated: false, hasPartialAccess: false };
    case ACTIONS.SET_PARTIAL_ACCESS:
      return { ...state, isAuthenticated: false, hasPartialAccess: true };
    default:
      return state;
  }
};
