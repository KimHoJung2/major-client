import { AxiosError } from 'axios';
import { ActionType, createAsyncAction } from 'typesafe-actions';
import { LoginUser } from '../models/auth.model';

const USERS_LOGIN_REQUEST = 'auth/USERS_LOGIN_REQUEST';
const USERS_LOGIN_SUCCESS = 'auth/USERS_LOGIN_SUCCESS';
const USERS_LOGIN_FAILURE = 'auth/USERS_LOGIN_FAILURE';

export const usersLoginAction = createAsyncAction(
  USERS_LOGIN_REQUEST,
  USERS_LOGIN_SUCCESS,
  USERS_LOGIN_FAILURE
)<LoginUser, { user: string }, AxiosError>();

const actions = {
  usersLoginAction
};

export type AuthAction = ActionType<typeof actions>;
