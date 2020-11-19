// base
import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import { AuthState, authSaga, authReducer } from './auth';

export interface StoreState {
  router: RouterState;
  authState: AuthState;
}

export function* saga() {
  yield all([fork(authSaga)]);
}

const reducer = (history: History) =>
  combineReducers<StoreState>({
    router: connectRouter(history),
    authState: authReducer
  });

export default reducer;
