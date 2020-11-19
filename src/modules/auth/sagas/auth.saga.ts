// base
import { takeEvery, put } from 'redux-saga/effects';

// packages
import { ActionType } from 'typesafe-actions';
import { message } from 'antd';

// modules
import * as Actions from '../actions/auth.action';
import { authAPI } from '../apis/auth.api';
import { ResponseUserInfo } from '../models/auth.model';

function* userLoginSaga(
  action: ActionType<typeof Actions.usersLoginAction.request>
) {
  const data = action.payload;
  try {
    const { access_token }: ResponseUserInfo = yield authAPI.usersLogin(data);
    console.log(access_token);
  } catch (error) {
    yield put(Actions.usersLoginAction.failure(error));
    message.error(error);
  }
}

export function* authSaga() {
  yield takeEvery(Actions.usersLoginAction.request, userLoginSaga);
}
