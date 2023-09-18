/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { CoreService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<any> => {
  const response = await CoreService.get('/semester-regestration', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getByIdFromDB = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response = await CoreService.get(`/semester-regestration/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const insertIntoDB = async (req: Request): Promise<any> => {
  const response = await CoreService.post(
    `/semester-regestration/create-semester-registration`,
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
    `/semester-regestration/${id}`,
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
  const response = await CoreService.delete(`/semester-regestration/${id}`, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

const getMyRegistration = async (req: Request): Promise<any> => {
  const response = await CoreService.get(
    `/semester-regestration/get-my-registration`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

const startRegistration = async (req: Request): Promise<any> => {
  const response = await CoreService.post(
    `/semester-regestration/start-registration`,
    {},
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

const mySemesterRegistrationCourses = async (req: Request): Promise<any> => {
  const response = await CoreService.get(
    `/semester-regestration/get-my-semsester-courses`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

const enrollIntoCourse = async (req: Request): Promise<any> => {
  const response = await CoreService.post(
    `/semester-regestration/enroll-into-course`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

const withDrawFromCourse = async (req: Request): Promise<any> => {
  const response = await CoreService.post(
    `/semester-regestration/withdraw-into-course`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

const confirmRegistration = async (req: Request): Promise<any> => {
  const response = await CoreService.post(
    `/semester-regestration/confirm-my-registration`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

const startNewSemester = async (req: Request): Promise<any> => {
  const { id } = req.params;
  const response = await CoreService.post(
    `/semester-regestration/${id}/start-new-semester`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

export const SemesterRegistrationService = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB,
  getMyRegistration,
  startRegistration,
  mySemesterRegistrationCourses,
  enrollIntoCourse,
  withDrawFromCourse,
  confirmRegistration,
  startNewSemester,
};
