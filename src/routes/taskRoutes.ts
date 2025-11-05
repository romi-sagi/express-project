import express from "express";
import taskController from "../controllers/taskController";
const router = express.Router();

router.get('/tasks', taskController.getTasks);
router.get('/:id', taskController.getTaskById);
router.get('?filter', taskController.filterMyDayTasks);
router.delete('/:id', taskController.deleteTaskById);
router.post('/', taskController.createTask);

export default router;