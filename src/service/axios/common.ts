import { IConfig, IPromiseStateResponse } from '@models';
import { configStorage } from '@utils';
import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  timeout: 300000,
  timeoutErrorMessage: 'Connection is timeout exeeded',
});
const getConfig = () => {
  return configStorage.getValue();
};

const getUrlByKey = (key: keyof IConfig['rest']) => {
  return getConfig()['rest'][key];
};
export const BaseService = {
  get<T = any>(url, config): Promise<IPromiseStateResponse<T>> {
    return instance
      .get(url, {
        ...config,
        baseURL: getUrlByKey('apiUrl'),
      })
      .then((res: IPromiseStateResponse<T>) => {
        //... Do Something
        return Promise.resolve({ ...res });
      })
      .catch((error) => {
        //Do something
        return Promise.reject({ ...error });
      });
  },
};
