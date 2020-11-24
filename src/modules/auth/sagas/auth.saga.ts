// base
import { takeEvery, put, delay } from 'redux-saga/effects';

// packages
import { ActionType } from 'typesafe-actions';
import { message } from 'antd';

// modules
import * as Actions from '../actions/auth.action';
import { authAPI } from '../apis/auth.api';
import { cookieStorage, COOKIE_ACCESS_TOKEN } from 'services/cookie';
// import { ResponseUserInfo } from '../models/auth.model';

function* userLoginSaga(
  action: ActionType<typeof Actions.usersLoginAction.request>
) {
  const data = action.payload;
  try {
    const res = yield authAPI.usersLogin(data);
    if (res.status) {
      message.error(res.message, 1);
    } else {
      yield cookieStorage.setCookie(COOKIE_ACCESS_TOKEN, res.access_token, {
        expires: res.expires
      });
      yield put(
        Actions.usersLoginAction.success({
          user: data.email,
          admin: res.usertype
        })
      );
    }
  } catch (error) {
    yield put(Actions.usersLoginAction.failure(error));
    message.error(error);
  }
}

function* checkAuthencationSaga() {
  try {
    const accessToken = cookieStorage.getCookie(COOKIE_ACCESS_TOKEN);

    if (!accessToken) {
      yield delay(100);

      yield put(
        Actions.checkAuthencationAction.success({
          isLogin: false
        })
      );

      return;
    }

    const user = yield authAPI.getUsersProfile(accessToken);

    yield put(
      Actions.checkAuthencationAction.success({
        isLogin: true,
        user: user.data
      })
    );
  } catch (error) {
    cookieStorage.removeCookie(COOKIE_ACCESS_TOKEN);

    yield put(Actions.checkAuthencationAction.failure(error));
  }
}

export function* authSaga() {
  yield takeEvery(Actions.usersLoginAction.request, userLoginSaga);
  yield takeEvery(
    Actions.checkAuthencationAction.request,
    checkAuthencationSaga
  );
}
