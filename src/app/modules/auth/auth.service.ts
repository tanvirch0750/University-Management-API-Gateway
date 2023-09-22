/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { AuthService } from '../../../shared/axios';

const loginUser = async (req: Request): Promise<any> => {
  const response = await AuthService.post('/auth/login', req.body);
  return response;
};

const refreshToken = async (req: Request): Promise<any> => {
  const { refreshToken } = req.cookies;
  const response = await AuthService.post('/auth/refresh-token', req.body, {
    headers: {
      cookie: `refreshToken=${refreshToken}`,
    },
  });
  return response;
};

const changePassword = async (req: Request): Promise<any> => {
  const response = await AuthService.post('/auth/change-password', req.body, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

export const AuthenticationService = {
  loginUser,
  refreshToken,
  changePassword,
};
