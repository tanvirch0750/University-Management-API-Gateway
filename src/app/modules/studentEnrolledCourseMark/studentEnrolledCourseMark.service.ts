/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { CoreService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<any> => {
  const response = await CoreService.get('/student-enrolled-course-marks', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getStudentMarks = async (req: Request): Promise<any> => {
  const response = await CoreService.get(
    '/student-enrolled-course-marks/my-marks',
    {
      params: req.query,
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

const updateMarks = async (req: Request): Promise<any> => {
  const response = await CoreService.post(
    `/student-enrolled-course-marks/update-marks`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

const updateCourseFinalMarks = async (req: Request): Promise<any> => {
  const response = await CoreService.post(
    `/student-enrolled-course-marks/update-final-marks`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

export const StudentEnrolledCourseMarkService = {
  getAllFromDB,
  getStudentMarks,
  updateCourseFinalMarks,
  updateMarks,
};
