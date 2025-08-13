import { tasks } from "../data/tasksStore";
import { Task } from "../taskDto";

const getAllTasks = (): Task[] => {
    return tasks;
}

const getTaskById = (id: string): Task | undefined => {
    return tasks.find((t) => t.id === id);
}

export default {
    getAllTasks,
    getTaskById
};