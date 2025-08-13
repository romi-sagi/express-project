import express from "express";
import taskController from "../controllers/taskController";
const router = express.Router();

router.get('/tasks', taskController.getTasks);
router.get('/:id', taskController.getTaskById)

export default router;