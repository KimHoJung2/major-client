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
      .catch(err => orElseThrow(err)),

  getAttendUserList: (boardId: string) =>
    boardInstance
      .get('/user/attend', { params: { boardId: boardId } })
      .then(res => res.data)
      .catch(err => orElseThrow(err)),

  postAttendUser: (boardId: string, username: string | undefined) =>
    boardInstance
      .post('/user/attend', { boardId: boardId, username: username })
      .then(res => res.data)
      .catch(err => orElseThrow(err)),

  deleteAttendUser: (boardId: string, usernmae: string | undefined) =>
    boardInstance
      .post('/user/attend/delete', { boardId: boardId, username: usernmae })
      .then(res => res.data)
      .catch(err => {
        orElseThrow(err);
      }),

  createBoard: (data: {
    key: number;
    title: string;
    name: string | undefined;
    text: string;
  }) =>
    boardInstance
      .post('/scoreBoard', data)
      .then(res => res.data)
      .catch(err => {
        orElseThrow(err);
      }),
  updateBoard: (data: { id: string; title: string; text: string }) =>
    boardInstance
      .post('/scoreBoard/update', data)
      .then(res => res.data)
      .catch(err => {
        orElseThrow(err);
      }),
  getScore: (id: string) =>
    boardInstance
      .get('/scoreBoard/score', { params: { id: id } })
      .then(res => res.data)
      .catch(err => {
        orElseThrow(err);
      })
};
