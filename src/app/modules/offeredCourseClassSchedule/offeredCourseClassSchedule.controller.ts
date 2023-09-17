import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OfferedCourseClassScheduleService } from './offeredCourseClassSchedule.service';

const insertIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await OfferedCourseClassScheduleService.insertIntoDB(req);
  sendResponse(res, result);
});

const getAllFromDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await OfferedCourseClassScheduleService.getAllFromDB(req);

  sendResponse(res, result);
});

const updateOneIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await OfferedCourseClassScheduleService.updateOneInDB(req);

  sendResponse(res, result);
});

const getByIdFromDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await OfferedCourseClassScheduleService.getByIdFromDB(req);

  sendResponse(res, result);
});

const deleteByIdFromDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await OfferedCourseClassScheduleService.deleteByIdFromDB(req);

  sendResponse(res, result);
});

export const OfferedCourseClassSceduleController = {
  insertIntoDB,
  getAllFromDB,
  updateOneIntoDB,
  getByIdFromDB,
  deleteByIdFromDB,
};
