import { tasks } from "../data/tasksStore";
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

const deleteTaskById = (id: string): boolean => {
    const index = getIndexById(id);
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

const updateTask = (id: string, updatedTask: Task): Task | undefined=> {
    const index = getIndexById(id);
    if (index === -1) return undefined;

    tasks[index] = ...updateTask;

    return tasks[taskid];
}


export default {
    getAllTasks,
    getTaskById,
    deleteTaskById,
    createTask,
    updateTask
};