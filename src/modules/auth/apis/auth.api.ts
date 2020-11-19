// base
import AxiosInstanceCreator from 'services/api';
import { LoginUser, ResponseUserInfo } from '../models/auth.model';

const authInstance = new AxiosInstanceCreator().create();

authInstance.interceptors.request.use(config => {
  return config;
});

export const authAPI = {
  usersLogin: (data: LoginUser) =>
    authInstance
      .post<ResponseUserInfo>('/users/login', data)
      .then(res => res.data),
  usersLogout: () => authInstance.post<void>('/users/logout')
};
