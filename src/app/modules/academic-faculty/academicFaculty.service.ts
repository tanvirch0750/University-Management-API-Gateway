/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { CoreService as HttpService } from '../../../shared/axios';

const insertIntoDB = async (req: Request): Promise<any> => {
  const response: any = await HttpService.post(`/academic-faculty`, req.body, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getAllFromDB = async (req: Request): Promise<any> => {
  const response: any = await HttpService.get('/academic-faculty', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getByIdFromDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response: any = await HttpService.get(`/academic-faculty/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const updateOneInDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response: any = await HttpService.patch(
    `/academic-faculty/${id}`,
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
  const response: any = await HttpService.delete(`/academic-faculty/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

export const AcademicFacultyService = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB,
};
