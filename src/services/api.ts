import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class AxiosInstanceCreator {
  //axios 객체 생성
  #instance: AxiosInstance;

  //초기화
  constructor(config?: AxiosRequestConfig) {
    config = {
      baseURL: process.env.REACT_APP_API_URL
    };
    this.#instance = axios.create(config);
  }

  //외부 호출 객체
  create() {
    return this.#instance;
  }
}

export default AxiosInstanceCreator;
