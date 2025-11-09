import express from "express";
import taskController from "../controllers/taskController";
const router = express.Router();

router.get('/tasks', taskController.getTasks);
router.get('/:id', taskController.getTaskById);
router.delete('/:id', taskController.deleteTaskById);
router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask)

export default router;