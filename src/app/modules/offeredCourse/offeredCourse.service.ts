/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { CoreService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<any> => {
  const response = await CoreService.get('/offered-courses', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getByIdFromDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response = await CoreService.get(`/offered-courses/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const insertIntoDB = async (req: Request): Promise<any> => {
  const response = await CoreService.post(
    `/offered-courses/create-offered-course`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

const updateOneInDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response = await CoreService.patch(`/offered-courses/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const deleteByIdFromDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response = await CoreService.delete(`/offered-courses/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

export const OfferedCourseService = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB,
};
