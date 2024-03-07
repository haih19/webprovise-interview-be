export type IApiResponse<T> = {
  status: number;
  message: string;
  content: T;
};
