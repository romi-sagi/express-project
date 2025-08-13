import { tasks } from "../data/tasksStore";
import { Task } from "../taskDto";

const getAllTasks = (): Task[] => {
    return tasks;
}

const getTaskById = (id: string): Task | undefined => {
    return tasks.find((t) => t.id === id);
}

const deleteTaskById = (id: string): boolean => {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) return false;

    tasks.splice(index, 1);

    return true;
}

export default {
    getAllTasks,
    getTaskById,
    deleteTaskById
};