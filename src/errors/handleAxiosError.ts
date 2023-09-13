import { AxiosError } from 'axios';
import ApiError from './ApiError';

export const handleAxiosError = (err: AxiosError) => {
  const data = (err.response?.data as { message?: string }) || {};

  const errorObj = [
    {
      path: '',
      message: data.message || 'Something went wrong',
    },
  ];
  const message = data.message || 'Something went wrong';
  return new ApiError(message, err?.response?.status || 500, errorObj);
};
