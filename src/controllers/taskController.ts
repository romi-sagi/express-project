import { Request, Response } from "express";
import taskController from "../services/taskService";
import { Task } from "../taskDto";
import { convertTaskToDto } from "../converters/taskConverter";
import taskDal from "../dal/taskDal";

type GetTaskByIdParams = { id: string };

const getTasks = (request: Request, response: Response) => {
    try {
        const tasks = taskController.getAllTasks();

        response.status(200).json(tasks.map(convertTaskToDto));
    } catch (err) {
        response.status(500).json("internal error occurred");
    }
}

const getTaskById = (request: Request<GetTaskByIdParams, {}, Task>, response: Response) => {
    const taskId = request.params.id;

    try {
        const task = taskController.getTaskById(taskId)

        if (!task) return response.status(404).send({ message: 'task not found' });

        return response.status(200).json(convertTaskToDto(task));

    } catch (err) {
        response.status(500).send({ message: "internal error occurred" });
    }
}

export const deleteTaskById = (request: Request<{ id: string }, {}, Task>, response: Response) => {
    try {
        const taskId = request.params.id;
        const tasks = taskDal.deleteTaskById(taskId);

        if (!tasks) return response.status(404).send({ message: 'task not found' });

        return response.status(200).json(tasks.map(convertTaskToDto));

    } catch (err) {
        const message = err instanceof Error ? err.message : 'Something went wrong';
        response.status(404).json({ error: message });
    }
}

export default {
    getTasks,
    getTaskById,
    deleteTaskById
};