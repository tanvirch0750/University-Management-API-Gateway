import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { validateRequest } from '../../middlewares/validateRequest';
import { StudentEnrolledCourseMarkController } from './studentEnrolledCourseMark.controller';
import { StudentEnrolledCourseMarkValidation } from './studentEnrolledCourseMark.validation';

const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.FACULTY),
  StudentEnrolledCourseMarkController.getAllFromDB
);
router.get(
  '/my-marks',
  auth(ENUM_USER_ROLE.STUDENT),
  StudentEnrolledCourseMarkController.getStudentMarks
);

router.patch(
  '/update-marks',
  validateRequest(StudentEnrolledCourseMarkValidation.updateStudentMarks),
  auth(ENUM_USER_ROLE.FACULTY),
  StudentEnrolledCourseMarkController.updateMarks
);

router.patch(
  '/update-final-marks',
  validateRequest(
    StudentEnrolledCourseMarkValidation.updateStudentCourseFinalMarks
  ),
  auth(ENUM_USER_ROLE.FACULTY),
  StudentEnrolledCourseMarkController.updateCourseFinalMarks
);

export const studentEnrolledCourseMarkRoutes = router;
