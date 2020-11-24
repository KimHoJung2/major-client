// base
import produce from 'immer';
import { createReducer } from 'typesafe-actions';

// action
import {
  AuthAction,
  usersLoginAction,
  checkAuthencationAction
} from '../actions/auth.action';

export interface AuthState {
  isLogin?: boolean;
  admin: string | undefined;
}

// reducers
const initialState: AuthState = {
  isLogin: undefined,
  admin: ''
};

export const authReducer = createReducer<AuthState, AuthAction>(initialState)
  .handleAction(usersLoginAction.success, (state, action) =>
    produce(state, draft => {
      console.log(action);
      draft.isLogin = true;
      draft.admin = action.payload.admin;
    })
  )
  .handleAction(checkAuthencationAction.success, (state, action) =>
    produce(state, draft => {
      draft.isLogin = action.payload.isLogin;
      draft.admin = action.payload.user?.usertype;
    })
  );
