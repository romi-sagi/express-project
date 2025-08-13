import { Request, Response } from "express";
import taskController from "../services/taskService";
import { convertTaskToDto } from "../converters/taskConverter";
import taskDal from "../dal/taskDal";

type TaskIdParams = { id: string };

const getTasks = (_: Request, response: Response) => {
    try {
        const tasks = taskController.getAllTasks();

        response.status(200).json(tasks.map(convertTaskToDto));
    } catch (err) {
        response.status(500).json("internal error occurred");
    }
}

const getTaskById = (request: Request<TaskIdParams>, response: Response) => {
    const taskId = request.params.id;

    try {
        const task = taskController.getTaskById(taskId)

        if (!task) return response.status(404).send({ message: 'task not found' });

        return response.status(200).json(convertTaskToDto(task));

    } catch (err) {
        response.status(500).send({ message: "internal error occurred" });
    }
}

export const deleteTaskById = (request: Request<TaskIdParams>, response: Response) => {
    try {
        const taskId = request.params.id;
        const isDeleted = taskDal.deleteTaskById(taskId);

        if (!isDeleted) return response.status(404).send({ message: 'task not found' });

        return response.status(200).json({ deleted: true });

    } catch (err) {
        response.status(500).json({ message: "internal error occurred" });
    }
}

export default {
    getTasks,
    getTaskById,
    deleteTaskById
};