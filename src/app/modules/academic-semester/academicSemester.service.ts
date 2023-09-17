/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { CoreService as HttpService } from '../../../shared/axios';

const insertIntoDB = async (req: Request): Promise<any> => {
  const response = await HttpService.post(
    '/academic-semester/create-semester',
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
  const response = await HttpService.get(
    '/academic-semester',

    {
      params: req.query,
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );

  return response;
};

const updateOneIntoDB = async (req: Request): Promise<any> => {
  const { id } = req.params;

  const response = await HttpService.patch(
    `/academic-semester/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

const getByIdFromDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response = await HttpService.get(`/academic-semester/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const deleteByIdFromDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response = await HttpService.delete(`/academic-semester/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

export const AcademicSemesterServices = {
  insertIntoDB,
  getAllFromDB,
  updateOneIntoDB,
  getByIdFromDB,
  deleteByIdFromDB,
};
