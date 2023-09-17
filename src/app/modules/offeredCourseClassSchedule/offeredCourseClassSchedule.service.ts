/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { CoreService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<any> => {
  const response = await CoreService.get('/offered-course-class-schedule', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getByIdFromDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response = await CoreService.get(
    `/offered-course-class-schedule/${id}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

const insertIntoDB = async (req: Request): Promise<any> => {
  const response = await CoreService.post(
    `/offered-course-class-schedule/create-class-schedule`,
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
    `/offered-course-class-schedule/${id}`,
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
  const response = await CoreService.delete(
    `/offered-course-class-schedule/${id}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

export const OfferedCourseClassScheduleService = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB,
};
