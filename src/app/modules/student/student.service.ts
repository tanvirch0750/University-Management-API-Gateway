/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { AuthService, CoreService as HttpService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<any> => {
  const response: any = await HttpService.get('/student', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getMyCourses = async (req: Request): Promise<any> => {
  const response: any = await HttpService.get('/student/my-courses', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getMyAcademicInfos = async (req: Request): Promise<any> => {
  const response: any = await HttpService.get('/student/my-academic-info', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getMyCourseSchedules = async (req: Request): Promise<any> => {
  const response: any = await HttpService.get('/student/my-course-schedules', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getByIdFromDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response: any = await HttpService.get(`/student/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getStudentProfile = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response: any = await AuthService.get(`/student/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const updateOneInDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response: any = await AuthService.patch(`/student/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const deleteByIdFromDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response: any = await HttpService.delete(`/student/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

export const StudentService = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  getMyCourses,
  getMyCourseSchedules,
  getMyAcademicInfos,
  getStudentProfile,
};
