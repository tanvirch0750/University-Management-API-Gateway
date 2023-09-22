import express from 'express';
import { academicDepartmentRoutes } from '../modules/academic-department/academicDepartment.routes';
import { academicFacultyRoutes } from '../modules/academic-faculty/academicFaculty.routes';
import { academicSemesterRoutes } from '../modules/academic-semester/academicSemester.routes';
import { authRoutes } from '../modules/auth/auth.routes';
import { buildingRoutes } from '../modules/building/building.routes';
import { courseRoutes } from '../modules/course/course.routes';
import { offeredCourseRoutes } from '../modules/offeredCourse/offeredCourse.routes';
import { offeredCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.routes';
import { offeredCoursesSectionRoutes } from '../modules/offeredCourseSection/offeredCourseSection.routes';
import { roomRoutes } from '../modules/room/room.routes';
import { semesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.routes';
import { studentEnrolledCourseRoutes } from '../modules/studentEnrolledCourse/studentEnrolledCourse.routes';
import { studentEnrolledCourseMarkRoutes } from '../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.routes';
import { studentSemesterPaymentRoutes } from '../modules/studentSemesterPayment/studentSemesterPayment.routes';
import { userRoutes } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes
  },
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/academic-semester',
    route: academicSemesterRoutes,
  },
  {
    path: '/academic-faculty',
    route: academicFacultyRoutes,
  },
  {
    path: '/academic-department',
    route: academicDepartmentRoutes,
  },
  {
    path: '/building',
    route: buildingRoutes,
  },
  {
    path: '/room',
    route: roomRoutes,
  },
  {
    path: '/course',
    route: courseRoutes,
  },
  {
    path: '/offered-courses',
    route: offeredCourseRoutes,
  },
  {
    path: '/offered-course-class-schedule',
    route: offeredCourseClassScheduleRoutes,
  },

  {
    path: '/semester-regestration',
    route: semesterRegistrationRoutes,
  },
  {
    path: '/offered-courses-section',
    route: offeredCoursesSectionRoutes,
  },
  {
    path: '/student-enrolled-course',
    route: studentEnrolledCourseRoutes,
  },
  {
    path: '/student-enrolled-course-marks',
    route: studentEnrolledCourseMarkRoutes,
  },
  {
    path: '/student-semester-payment',
    route: studentSemesterPaymentRoutes,
  },
];

// Application Routes
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
