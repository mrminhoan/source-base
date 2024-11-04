import axios, { AxiosResponse } from 'axios';
import { omit, isObject } from 'lodash';
import { IApiRequestConfig, IConfig, IPromiseState } from '@models/interface';
import { configStorage } from '@utils';
import { userService } from './pages/user';
const fakeGetNewToken = async (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const fakeAccessToken = Math.random().toString(36).substring(2); // Giả lập token mới
      const fakeRefreshToken = Math.random().toString(36).substring(2); // Giả lập refresh token mới
      console.log('Generated new tokens:', {
        accessToken: fakeAccessToken,
        refreshToken: fakeRefreshToken,
      });
      resolve({ accessToken: fakeAccessToken, refreshToken: fakeRefreshToken });
    }, 1000); // Giả lập thời gian xử lý của API
  });
};

const instance = axios.create({
  timeout: 300000,
  timeoutErrorMessage: 'Connection is timeout exeeded',
});
const getConfig = () => {
  return configStorage.getValue();
};
const ongoingRequests: string[] = [];
const getUrlByKey = (key: keyof IConfig['rest']) => {
  return getConfig()['rest'][key];
};

export const BaseService = {
  get<T = any>({ url = '', headers, keyUrl = 'apiUrl', payload, toResponse, onError, keyMap = '' }: Partial<IApiRequestConfig>): Promise<AxiosResponse<T>> {
    return instance
      .get<T, AxiosResponse<T>>(url, {
        headers: headers || {},
        baseURL: getUrlByKey(keyUrl),
        params: payload,
      })
      .then((result) => {
        // const dataMapping = result.data.data;
        // console.log(dataMapping)
        // if (toResponse) {
        //     if (Array.isArray(dataMapping)) {
        //         dataMapping = dataMapping.map((item) => toResponse(item));
        //     } else {
        //         dataMapping = toResponse(dataMapping);
        //     }
        // }
        return Promise.resolve(result);
      })
      .catch((error) => {
        onError?.(error);
        return Promise.reject(error);
      });
  },
  getById<T = any>({ url = '', headers, keyUrl = 'apiUrl', payload, toResponse }: Partial<IApiRequestConfig>): Promise<IPromiseState<T>> {
    return instance
      .get(url, {
        headers: headers || {},
        baseURL: getUrlByKey(keyUrl),
        params: payload,
      })
      .then((res) => {
        let mappingData = res.data;
        if (toResponse) {
          mappingData = toResponse(mappingData);
        }
        return Promise.resolve({ ...res, data: mappingData });
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  },
  post<T = any>({ url = '', payload, headers, keyUrl = 'apiUrl', toRequest }: Partial<IApiRequestConfig>): Promise<IPromiseState<T>> {
    if (toRequest) {
      payload = toRequest(payload);
    }
    return instance
      .post(url, payload, {
        headers: headers || {},
        baseURL: getUrlByKey(keyUrl),
      })
      .then((res) => {
        return Promise.resolve(res);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  },
};

instance.interceptors.request.use(
  (config) => {
    const requestId = Math.random().toString(36).substring(7);
    const headers = omit(config.headers, 'Content-Type');
    headers['Content-Type'] = config.headers['Content-Type']; // Can custom something for headers.
    config['requestId'] = requestId;
    ongoingRequests.push(requestId);
    return { ...config, headers };
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    const { data, config } = response; // Can config something with data and config  like headers, totalItems in header and requestId,... in here
    return Promise.resolve(response);
  },
  async (error) => {
    const originalRequest = error.config;
    const { response } = error;
    return Promise.reject(error);
  }
);
