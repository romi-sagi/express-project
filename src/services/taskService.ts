import { deleteTaskDalById, getAllTasksDal, getTaskDalById } from "../dal/taskDal";
import { Task } from "../taskDto";

export const getAllTasks = (): Task[] => {
    try {
        return getAllTasksDal();
    } catch (e) {
        throw new Error("Failed to get tasks");
    }
}

export const getTaskById = (id: string): Task => {
    const task = getTaskDalById(id);

    if (!task) {
        throw new Error(`Task with id ${id} not found`);
    }

    return task;
}

export const deleteTaskById = (id: string) => {
    const tasks = deleteTaskDalById(id);

    if (!tasks) {
        throw new Error(`Task with id ${id} not found`);
    }

    return tasks;
}
