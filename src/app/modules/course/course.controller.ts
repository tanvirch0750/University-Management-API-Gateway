import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CourseService } from './course.service';

const insertIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await CourseService.insertIntoDB(req);
  sendResponse(res, result);
});

const getAllFromDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await CourseService.getAllFromDB(req);

  sendResponse(res, result);
});

const updateOneIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await CourseService.updateOneInDB(req);

  sendResponse(res, result);
});

const getByIdFromDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await CourseService.getByIdFromDB(req);

  sendResponse(res, result);
});

const deleteByIdFromDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await CourseService.deleteByIdFromDB(req);

  sendResponse(res, result);
});

export const CourseController = {
  insertIntoDB,
  getAllFromDB,
  updateOneIntoDB,
  getByIdFromDB,
  deleteByIdFromDB,
};
