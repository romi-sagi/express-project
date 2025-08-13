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

export const deleteTaskDalById = (id: string) => {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) return null;

    tasks.splice(index, 1);

    return tasks;
}