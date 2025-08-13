import { Request, Response } from "express";
import { getAllTasks, getTaskById } from "../services/taskService";
import { Task } from "../taskDto";
import { taskConverterToDto, tasksConverterToDto } from "../converters/taskConverter";

type getTaskByIdParams = { id: string };

export const getTasksController = (request: Request, response: Response) => {
    try {
        const tasks = getAllTasks();

        response.status(200).json(tasksConverterToDto(tasks));
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Something went wrong';
        response.status(500).json({ error: message });
    }
}

export const getTaskByIdController = (request: Request<getTaskByIdParams, {}, Task>, response: Response) => {
    const taskId = request.params.id;

    try {
        const task = getTaskById(taskId)

        response.status(200).json(taskConverterToDto(task));
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Something went wrong';
        response.status(404).json({ error: message });
    }
}

export const deleteTaskByIdController = (request: Request<{ id: string }, {}, Task>, response: Response) => {
    try {
        const taskId = request.params.id;
        const tasks = deleteTaskById(taskId);

        response.status(200).json(tasks);
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Something went wrong';
        response.status(404).json({ error: message });
    }
}
