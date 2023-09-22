/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { AuthService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<any> => {
  const response: any = await AuthService.get('/admins', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getByIdFromDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response: any = await AuthService.get(`/admin/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const updateOneInDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response: any = await AuthService.patch(`/admin/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const deleteByIdFromDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response: any = await AuthService.delete(`/admin/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

export const AdminService = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
};
