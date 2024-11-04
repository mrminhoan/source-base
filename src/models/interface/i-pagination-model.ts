export interface IPaginationModelResponse<T = any> {
  total: number;
  skip: number;
  limit: number;
  data: {
    data: T[];
  };
}
