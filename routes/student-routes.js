import { router } from "express";
import { addStudent } from "../controllers/studentController.js";

const _router = router();

_router.post("/student", addStudent);

export const routes = _router;
