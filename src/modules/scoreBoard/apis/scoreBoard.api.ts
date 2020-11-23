// base
import { AxiosError } from 'axios';
import AxiosInstanceCreator from 'services/api';
import { cookieStorage, COOKIE_ACCESS_TOKEN } from 'services/cookie';

const boardInstance = new AxiosInstanceCreator().create();

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

boardInstance.interceptors.request.use(config => {
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

export const scoreBoardAPI = {
  getScoreBoardList: (skip: number) =>
    boardInstance
      .get('/scoreBoard?', { params: { skip: skip } })
      .then(res => res.data)
      .catch(err => orElseThrow(err))
};
