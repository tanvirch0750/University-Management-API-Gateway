import express from 'express';
import { academicDepartmentRoutes } from '../modules/academic-department/academicDepartment.routes';
import { academicFacultyRoutes } from '../modules/academic-faculty/academicFaculty.routes';
import { academicSemesterRoutes } from '../modules/academic-semester/academicSemester.routes';
import { buildingRoutes } from '../modules/building/building.routes';
import { courseRoutes } from '../modules/course/course.routes';

const router = express.Router();

const moduleRoutes = [
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
    path: '/course',
    route: courseRoutes,
  },
];

// Application Routes
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
