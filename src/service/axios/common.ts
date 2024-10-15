import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  timeout: 300000,
  timeoutErrorMessage: 'Connection is timeout exeeded',
});

export const BaseService = {
  get<T = any>({ url, baseUrl, payload }: any): Promise<T> {
    return instance
      .get(url, {
        baseURL: baseUrl,
        params: payload
      })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error;
      });
  },
};
