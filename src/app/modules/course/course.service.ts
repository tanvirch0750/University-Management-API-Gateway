/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { CoreService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<any> => {
  const response = await CoreService.get('/course', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getByIdFromDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response = await CoreService.get(`/course/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const insertIntoDB = async (req: Request): Promise<any> => {
  const response = await CoreService.post(`/course/create-course`, req.body, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const updateOneInDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response = await CoreService.patch(`/course/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const deleteByIdFromDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response = await CoreService.delete(`/course/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

export const CourseService = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB,
};
