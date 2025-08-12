import express from "express";
import { getTaskByIdController, getTasksController } from "../controllers/taskController";
const router = express.Router();

router.get('/tasks', getTasksController);
router.get('/:id', getTaskByIdController)

export default router;