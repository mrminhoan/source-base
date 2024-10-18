import { IUserModels } from "../users";

export interface IFeedbackModel {
  id: number,
  body: string,
  postId: number,
  user: IUserModels
}