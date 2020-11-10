import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';

export const extractErrorMsg = (error: AxiosError) => {
  if (!error.response) {
    return '서버에 접속할 수 없습니다';
  } else {
    return error.response.data.error.message || '에러 발생';
  }
};

class AxiosInstanceCreator {
  #instans: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.#instans = axios.create(config);
    console.log(this.#instans);
  }

  create() {
    return this.#instans;
  }
}

export default AxiosInstanceCreator;
