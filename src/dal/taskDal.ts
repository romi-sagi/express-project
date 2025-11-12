import { tasks } from "../data/tasksStore";
import { TaskNotfoundError } from "../errorValidation/taskNotFoundError";
import { CreateTaskDetails, Task } from "../taskDto";
import { v4 as uuidv4 } from "uuid";

const getAllTasks = (): Task[] => {
    return tasks;
}

const getTaskById = (id: string): Task | undefined => {
    return tasks.find((t) => t.id === id);
}

const getIndexById = (id: string): number => {
    return tasks.findIndex(task => task.id === id);
}

const deleteTaskById = (id: string): void => {
    const index = getIndexById(id);
    if (index === -1)  throw new TaskNotfoundError('task not found');

    tasks.splice(index, 1);
}

const createTask = (data: CreateTaskDetails): Task => {
    const task: Task = {
        id: uuidv4(),
        ...data
    };
    tasks.push(task);

    return task;
}

const updateTask = (id: string, updatedTask: Task): Task => {
    const index = getIndexById(id);
    if (index === -1) throw new TaskNotfoundError('task not found');

    tasks[index] = { ...tasks[index], ...updatedTask };

    return tasks[index];
}

export default {
    getAllTasks,
    getTaskById,
    deleteTaskById,
    createTask,
    updateTask
};