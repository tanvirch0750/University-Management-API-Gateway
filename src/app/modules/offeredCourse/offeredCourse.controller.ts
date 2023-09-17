import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OfferedCourseService } from './offeredCourse.service';

const insertIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await OfferedCourseService.insertIntoDB(req);
  sendResponse(res, result);
});

const getAllFromDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await OfferedCourseService.getAllFromDB(req);

  sendResponse(res, result);
});

const updateOneIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await OfferedCourseService.updateOneInDB(req);

  sendResponse(res, result);
});

const getByIdFromDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await OfferedCourseService.getByIdFromDB(req);

  sendResponse(res, result);
});

const deleteByIdFromDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await OfferedCourseService.deleteByIdFromDB(req);

  sendResponse(res, result);
});

export const OfferedCourseController = {
  insertIntoDB,
  getAllFromDB,
  updateOneIntoDB,
  getByIdFromDB,
  deleteByIdFromDB,
};
