// base
import { AxiosError } from 'axios';
import AxiosInstanceCreator from 'services/api';
import { cookieStorage, COOKIE_ACCESS_TOKEN } from 'services/cookie';
import { LoginUser, ResponseTokenInfo } from '../models/auth.model';

const authInstance = new AxiosInstanceCreator().create();

const orElseThrow = (error: AxiosError) => {
  if (
    error.response?.status === 401 ||
    error.response?.status === 402 ||
    error.response?.status === 403
  ) {
    cookieStorage.removeCookie(COOKIE_ACCESS_TOKEN);
  }
  throw error;
};

authInstance.interceptors.request.use(config => {
  if (!config.headers['access-token']) {
    const token = cookieStorage.getCookie(COOKIE_ACCESS_TOKEN);

    if (token) {
      Object.assign(config.headers, {
        Accept: 'application/json',
        'access-token': token
      });
    }
  }
  return config;
});

export const authAPI = {
  usersLogin: (data: LoginUser) =>
    authInstance
      .post<ResponseTokenInfo>('/user/login', data)
      .then(res => res.data)
      .catch(err => err),

  usersLogout: () => authInstance.post<void>('/users/logout'),

  getUsersProfile: (token: string) =>
    authInstance
      .get(`/user/profile`, { params: { token: token } })
      .then(res => res)
      .catch(err => {
        orElseThrow(err);
      })
};
