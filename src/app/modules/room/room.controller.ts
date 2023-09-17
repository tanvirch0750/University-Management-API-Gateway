import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { RoomService } from './room.service';

const insertIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await RoomService.insertIntoDB(req);
  sendResponse(res, result);
});

const getAllFromDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await RoomService.getAllFromDB(req);

  sendResponse(res, result);
});

const updateOneIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await RoomService.updateOneInDB(req);

  sendResponse(res, result);
});

const getByIdFromDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await RoomService.getByIdFromDB(req);

  sendResponse(res, result);
});

const deleteByIdFromDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await RoomService.deleteByIdFromDB(req);

  sendResponse(res, result);
});

export const RoomController = {
  insertIntoDB,
  getAllFromDB,
  updateOneIntoDB,
  getByIdFromDB,
  deleteByIdFromDB,
};
