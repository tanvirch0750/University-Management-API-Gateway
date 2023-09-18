/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { CoreService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<any> => {
  const response = await CoreService.get('/student-enrolled-course', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getByIdFromDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response = await CoreService.get(`/student-enrolled-course/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const insertIntoDB = async (req: Request): Promise<any> => {
  const response = await CoreService.post(
    `/student-enrolled-course`,
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
  const response = await CoreService.patch(
    `/student-enrolled-course/${id}`,
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
  const response = await CoreService.delete(`/student-enrolled-course/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

export const StudentEnrolledCourseService = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB,
};
