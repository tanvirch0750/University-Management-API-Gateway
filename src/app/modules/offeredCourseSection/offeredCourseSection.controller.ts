import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OfferedCourseSectionService } from './offeredCourseSection.service';

const insertIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await OfferedCourseSectionService.insertIntoDB(req);
  sendResponse(res, result);
});

const getAllFromDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await OfferedCourseSectionService.getAllFromDB(req);

  sendResponse(res, result);
});

const updateOneIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await OfferedCourseSectionService.updateOneInDB(req);

  sendResponse(res, result);
});

const getByIdFromDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await OfferedCourseSectionService.getByIdFromDB(req);

  sendResponse(res, result);
});

const deleteByIdFromDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await OfferedCourseSectionService.deleteByIdFromDB(req);

  sendResponse(res, result);
});

export const OfferedCourseSectionController = {
  insertIntoDB,
  getAllFromDB,
  updateOneIntoDB,
  getByIdFromDB,
  deleteByIdFromDB,
};
