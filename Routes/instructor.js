import express from "express";
import formidable from "express-formidable";

const router = express.Router();
import { requireSignin } from "../Middleware/verify.js";

import {
  getAllPayments,
  getAllUsers,
  imageInstructor,
  instructorCourses,
  instructorProducts,
  makeInstructor,
  studentCount,
} from "../Controllers/instructor.js";

router.post("/make-instructor", requireSignin, makeInstructor);
router.post(
  "/instructor-image",
  requireSignin,
  formidable({ maxFileSize: 5 * 1024 * 1024 }),
  imageInstructor
);

router.get("/instructor-courses", requireSignin, instructorCourses);
router.get("/instructor-products", requireSignin, instructorProducts);
router.get("/all-instructor", getAllUsers);
router.get("/instructor-payments", getAllPayments);
router.post("/instructor/student-count", studentCount);

export default router;
