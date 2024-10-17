import { AxiosResponse } from "axios";

export interface IPromiseStateResponse<T = unknown>  extends AxiosResponse<T>{
 totalItem?: number
}