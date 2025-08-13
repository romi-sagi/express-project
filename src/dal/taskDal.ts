import { tasks } from "../data/tasksStore";
import { Task } from "../taskDto";

export const getAllTasksDal = (): Task[] => {
    return tasks;
}

export const getTaskDalById = (id: string): Task => {
    const task = tasks.find((t) => t.id === id);
    if (!task) {
        throw new Error('Task is not found');
    }

    return task;
}