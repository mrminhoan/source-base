import { LOCAL_STORAGE } from '@constants';
import { IConfig } from '@models';
import { fetchJSON } from '../fetch-json';

export const configStorage = {
  getValue(): IConfig {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE.CONFIG)!);
  },
  setValue(data: IConfig) {
    return localStorage.setItem(LOCAL_STORAGE.CONFIG, JSON.stringify(data));
  },
};

export const setConfigStorage = async (urlRemote: string) =>{
  const config = await fetchJSON(urlRemote)
  configStorage.setValue(config)
  return config
}