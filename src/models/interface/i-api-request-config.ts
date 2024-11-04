import {IConfig} from "@models/interface";
import {AxiosRequestConfig, RawAxiosRequestHeaders} from "axios";
export interface IApiRequestConfig<T = any, TData = any> extends AxiosRequestConfig {
    url: string;
    headers: RawAxiosRequestHeaders;
    keyUrl: keyof IConfig["rest"];
    payload: Partial<T> | T;
    toResponse: Function;
    toRequest: Function;
    onError: Function;
    keyMap?: string;
}
