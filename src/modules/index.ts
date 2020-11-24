// base
import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import { AuthState, authSaga, authReducer } from './auth';
import {
  scoreBoardSaga,
  ScoreBoardState,
  scoreBoardReducer
} from './scoreBoard';

export interface StoreState {
  router: RouterState;
  authState: AuthState;
  scoreBoardState: ScoreBoardState;
}

export function* saga() {
  yield all([fork(authSaga)]);
  yield all([fork(scoreBoardSaga)]);
}

const reducer = (history: History) =>
  combineReducers<StoreState>({
    router: connectRouter(history),
    authState: authReducer,
    scoreBoardState: scoreBoardReducer
  });

export default reducer;
