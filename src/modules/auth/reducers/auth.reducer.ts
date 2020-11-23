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
}

// reducers
const initialState: AuthState = {
  isLogin: undefined
};

export const authReducer = createReducer<AuthState, AuthAction>(initialState)
  .handleAction(usersLoginAction.success, state =>
    produce(state, draft => {
      draft.isLogin = true;
    })
  )
  .handleAction(checkAuthencationAction.success, (state, action) =>
    produce(state, draft => {
      draft.isLogin = action.payload.isLogin;
    })
  );
