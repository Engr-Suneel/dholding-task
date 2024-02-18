import axios from 'axios';
import { AxiosError } from 'axios';
import { ApiError } from '../models';
import { readToken } from '../services';
import { ApiErrorData } from '../interfaces';

export const httpApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

httpApi.interceptors.request.use((config: any) => {
  config.headers = { ...config.headers, Authorization: `Bearer ${readToken()}` };

  return config;
});

httpApi.interceptors.response.use(undefined, (error: AxiosError<any>) => {
  throw new ApiError<ApiErrorData>(error.response?.data.message || error.message, error.response?.data);
});