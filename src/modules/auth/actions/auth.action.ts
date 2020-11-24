import { AxiosError } from 'axios';
import { ActionType, createAsyncAction } from 'typesafe-actions';
import { LoginUser, ResponseUserInfo } from '../models/auth.model';

const USERS_LOGIN_REQUEST = 'auth/USERS_LOGIN_REQUEST';
const USERS_LOGIN_SUCCESS = 'auth/USERS_LOGIN_SUCCESS';
const USERS_LOGIN_FAILURE = 'auth/USERS_LOGIN_FAILURE';

const CHECK_AUTHENCATION_REQUEST = 'auth/CHECK_AUTHENCATION_REQUEST';
const CHECK_AUTHENCATION_SUCCESS = 'auth/CHECK_AUTHENCATION_SUCCESS';
const CHECK_AUTHENCATION_FAILURE = 'auth/CHECK_AUTHENCATION_FAILURE';

export const usersLoginAction = createAsyncAction(
  USERS_LOGIN_REQUEST,
  USERS_LOGIN_SUCCESS,
  USERS_LOGIN_FAILURE
)<LoginUser, { user: string; admin: string }, AxiosError>();

export const checkAuthencationAction = createAsyncAction(
  CHECK_AUTHENCATION_REQUEST,
  CHECK_AUTHENCATION_SUCCESS,
  CHECK_AUTHENCATION_FAILURE
)<void, { isLogin: boolean; user?: ResponseUserInfo }, AxiosError>();

const actions = {
  usersLoginAction,
  checkAuthencationAction
};

export type AuthAction = ActionType<typeof actions>;
