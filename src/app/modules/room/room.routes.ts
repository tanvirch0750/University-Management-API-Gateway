import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { validateRequest } from '../../middlewares/validateRequest';
import { RoomController } from './room.controller';
import { RoomValidation } from './room.validation';

const router = express.Router();

router.patch(
  '/:id',
  validateRequest(RoomValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  RoomController.updateOneIntoDB
);

router.get('/:id', RoomController.getByIdFromDB);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  RoomController.deleteByIdFromDB
);

router.post(
  '/create-room',
  validateRequest(RoomValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  RoomController.insertIntoDB
);

router.get('/', RoomController.getAllFromDB);

export const roomRoutes = router;
