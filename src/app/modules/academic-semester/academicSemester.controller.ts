import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterServices } from './academicSemester.service';

const insertIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.insertIntoDB(req);

  sendResponse(res, result);
});

const getAllFromDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllFromDB(req);

  sendResponse(res, result);
});

const updateOneIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.updateOneIntoDB(req);

  sendResponse(res, result);
});

const getByIdFromDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getByIdFromDB(req);

  sendResponse(res, result);
});

const deleteByIdFromDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.deleteByIdFromDB(req);

  sendResponse(res, result);
});

export const AcademicSemesterController = {
  insertIntoDB,
  getAllFromDB,
  updateOneIntoDB,
  getByIdFromDB,
  deleteByIdFromDB,
};
