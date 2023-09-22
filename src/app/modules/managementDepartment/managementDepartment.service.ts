/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { AuthService } from '../../../shared/axios';

const insertIntoDB = async (req: Request): Promise<any> => {
  const response: any = await AuthService.post(
    `/management-department/create-management-department`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

const getAllFromDB = async (req: Request): Promise<any> => {
  const response: any = await AuthService.get('/management-department', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getByIdFromDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response: any = await AuthService.get(`/management-department/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const updateOneInDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response: any = await AuthService.patch(
    `/management-department/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

const deleteByIdFromDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response: any = await AuthService.delete(
    `/management-department/${id}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

export const ManagementDepartmentService = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB,
};
