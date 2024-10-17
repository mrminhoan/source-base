import { AxiosRequestConfig } from "axios";

export interface IApiRequestModel extends AxiosRequestConfig{
  payload: any
}