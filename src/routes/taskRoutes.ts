import express from "express";
import { deleteTaskByIdController, getTaskByIdController, getTasksController } from "../controllers/taskController";
const router = express.Router();

router.get('/tasks', getTasksController);
router.get('/:id', getTaskByIdController);
router.delete('/:id', deleteTaskByIdController);

export default router;