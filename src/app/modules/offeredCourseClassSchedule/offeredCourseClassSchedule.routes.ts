import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { validateRequest } from '../../middlewares/validateRequest';
import { OfferedCourseClassSceduleController } from './offeredCourseClassSchedule.controller';
import { OfferedCourseClassScheduleValidation } from './offeredCourseClassSchedule.validation';

const router = express.Router();

router.patch(
  '/:id',
  validateRequest(OfferedCourseClassScheduleValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseClassSceduleController.updateOneIntoDB
);

router.get('/:id', OfferedCourseClassSceduleController.getByIdFromDB);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseClassSceduleController.deleteByIdFromDB
);

router.post(
  '/create-class-schedule',
  validateRequest(OfferedCourseClassScheduleValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseClassSceduleController.insertIntoDB
);

router.get('/', OfferedCourseClassSceduleController.getAllFromDB);

export const offeredCourseClassScheduleRoutes = router;
