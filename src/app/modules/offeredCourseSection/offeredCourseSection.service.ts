/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { CoreService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<any> => {
  const response = await CoreService.get('/offered-courses-section', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getByIdFromDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response = await CoreService.get(`/offered-courses-section/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const insertIntoDB = async (req: Request): Promise<any> => {
  const response = await CoreService.post(
    `/offered-courses-section/create-offered-course-section`,
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
    `/offered-courses-section/${id}`,
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
  const response = await CoreService.delete(`/offered-courses-section/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

export const OfferedCourseSectionService = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB,
};
