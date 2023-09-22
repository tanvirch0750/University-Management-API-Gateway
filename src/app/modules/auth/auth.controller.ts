/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { AuthenticationService } from './auth.service';

import httpStatus from 'http-status';
import config from '../../../config';
import sendResponse from '../../../shared/sendResponse';

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.loginUser(req);

    const { refreshToken, ...others } = result.data;

    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true,
    };

    res.cookie('refreshToken', refreshToken, cookieOptions);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      status: 'success',
      message: 'User logged in successfully',
      data: others,
    });
  } catch (error) {
    next(error);
  }
};
const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await AuthenticationService.refreshToken(req);

    // const { refreshToken, ...others } = result.data;

    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true,
    };

    res.cookie('refreshToken', result.data.refreshToken, cookieOptions);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      status: 'success',
      message: 'Token refreshed successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const changePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await AuthenticationService.changePassword(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AuthenticationController = {
  loginUser,
  refreshToken,
  changePassword,
};
