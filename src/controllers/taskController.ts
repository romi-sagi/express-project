import { Request, Response } from "express";
import { convertTaskToDto } from "../converters/taskConverter";
import taskService from "../services/taskService";
import { CreateTaskDetails } from "../taskDto";

type TaskIdParams = { id: string };

const getTasks = (_: Request, response: Response) => {
    try {
        const tasks = taskService.getAllTasks();

        response.status(200).json(tasks.map(convertTaskToDto));
    } catch (err) {
        response.status(500).json("internal error occurred");
    }
}

const getTaskById = (request: Request<TaskIdParams>, response: Response) => {
    const taskId = request.params.id;

    try {
        const task = taskService.getTaskById(taskId)

        if (!task) return response.status(404).send({ message: 'task not found' });

        return response.status(200).json(convertTaskToDto(task));

    } catch (err) {
        response.status(500).send({ message: "internal error occurred" });
    }
}

const deleteTaskById = (request: Request<TaskIdParams>, response: Response) => {
    try {
        const taskId = request.params.id;
        const isDeleted = taskService.deleteTaskById(taskId);

        if (!isDeleted) return response.status(404).send({ message: 'task not found' });

        return response.status(200).send({ deleted: true });

    } catch (err) {
        response.status(500).send({ message: "internal error occurred" });
    }
}

const createTask = (request: Request<CreateTaskDetails>, response: Response) => {
    try {
        const newTask = taskService.createTask(request.body);

        response.status(201).send({ message: `task ${newTask.id} created` });
    }
    catch (err) {
        response.status(500).send({ message: "internal error occurred" });
    }
}

export default {
    getTasks,
    getTaskById,
    deleteTaskById,
    createTask
};