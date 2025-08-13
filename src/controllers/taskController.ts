import { Request, Response } from "express";
import taskController from "../services/taskService";
import { Task } from "../taskDto";
import { convertTaskToDto } from "../converters/taskConverter";

type getTaskByIdParams = { id: string };

const getTasks = (request: Request, response: Response) => {
    try {
        const tasks = taskController.getAllTasks();

        response.status(200).json(tasks.map(convertTaskToDto));
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Something went wrong';
        console.log(message);

        response.status(500).json("internal error occurred");
    }
}

const getTaskById = (request: Request<getTaskByIdParams, {}, Task>, response: Response) => {
    const taskId = request.params.id;

    try {
        const task = taskController.getTaskById(taskId)

        if (!task) return response.status(404).send("task not found");

        return response.status(200).json(convertTaskToDto(task));

    } catch (err) {
        const message = err instanceof Error ? err.message : 'Something went wrong';
        console.log(message);

        response.status(500).send("internal error occurred");
    }
}

export default {
    getTasks,
    getTaskById
};