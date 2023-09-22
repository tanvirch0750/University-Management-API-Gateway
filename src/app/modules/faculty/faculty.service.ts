/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { AuthService, CoreService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<any> => {
  const response: any = await CoreService.get('/faculty', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getMyCourses = async (req: Request): Promise<any> => {
  const response: any = await CoreService.get('/faculty/my-courses', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getMyCourseStudents = async (req: Request): Promise<any> => {
  const response: any = await CoreService.get('/faculty/my-course-students', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getByIdFromDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response: any = await CoreService.get(`/faculty/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getFacultyProfile = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response: any = await AuthService.get(`/faculty/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const updateOneInDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response: any = await AuthService.patch(`/faculty/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const deleteByIdFromDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response: any = await AuthService.delete(`/faculty/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

export const FacultyService = {
  updateOneInDB,
  getAllFromDB,
  getByIdFromDB,
  getMyCourses,
  getFacultyProfile,
  getMyCourseStudents,
  deleteByIdFromDB,
};
