/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { CoreService } from '../../../shared/axios';

const getMyPayment = async (req: Request): Promise<any> => {
  const response = await CoreService.get('/student-semester-payment', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  return response;
};

export const StudentSemesterPaymentService = {
  getMyPayment,
};
