import { AxiosResponse } from 'axios';

export interface IPromiseState<T = unknown> extends AxiosResponse<T> {
  totalItems?: number;
}
