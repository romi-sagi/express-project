import { tasks } from "../data/tasksStore";
import { CreateTaskDetails, Task } from "../taskDto";
import { v4 as uuidv4 } from "uuid";

const getTasks = (queryFilter?: string): Task[] => {
    if (queryFilter) {
        return tasks.filter((task) => task.myDay);
    }

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

const createTask = (data: CreateTaskDetails): Task => {
    const task: Task = {
        id: uuidv4(),
        ...data
    };
    tasks.push(task);

    return task;
}

export default {
    getTasks,
    getTaskById,
    deleteTaskById,
    createTask,
};