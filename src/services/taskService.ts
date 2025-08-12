import { deleteTaskByIdModel, getAllTasksModel, getTaskByIdModel } from "../models/taskModels";

export const getAllTasks = () => {
    try {
        return getAllTasksModel();
    } catch (e) {
        throw new Error("Failed to get tasks");
    }
}

export const getTaskById = (id: string) => {
    const task = getTaskByIdModel(id);

    if (!task) {
        throw new Error(`Task with id ${id} not found`);
    }

    return task;
}

export const deleteTaskById = (id: string) => {
    const tasks = deleteTaskByIdModel(id);

    if (!tasks) {
        throw new Error(`Task with id ${id} not found`);
    }

    return tasks;
}
