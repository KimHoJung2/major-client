// base
import produce from 'immer';
import { createReducer } from 'typesafe-actions';
import { ResponseUserInfo } from '../models/auth.model';
// action
import {
  AuthAction,
  usersLoginAction,
  checkAuthencationAction
} from '../actions/auth.action';

export interface AuthState {
  isLogin?: boolean;
  user: ResponseUserInfo | undefined;
}

// reducers
const initialState: AuthState = {
  isLogin: undefined,
  user: {
    email: '',
    username: '',
    usertype: '',
    joinDate: '',
    mPoint: 0,
    sex: '',
    created: undefined
  }
};

export const authReducer = createReducer<AuthState, AuthAction>(initialState)
  .handleAction(usersLoginAction.success, (state, action) =>
    produce(state, draft => {
      draft.isLogin = true;
      draft.user = action.payload.user;
    })
  )
  .handleAction(checkAuthencationAction.success, (state, action) =>
    produce(state, draft => {
      draft.isLogin = action.payload.isLogin;
      draft.user = action.payload.user;
    })
  );
