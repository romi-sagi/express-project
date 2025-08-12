import { tasks } from "../data/tasksStore";

export type Iteration = 'daily' | 'weekly' | 'monthly' | null;

export interface Task {
    id: string,
    title: string,
    description?: string,
    completed: boolean,
    myDay: boolean,
    dueDate?: Date,
    repeat?: Iteration
}

export const getAllTasksModel = () => {
    return tasks;
}

export const getTaskByIdModel = (id: string) => {
    const task = tasks.find((t) => t.id === id);

    return task;
}

export const deleteTaskByIdModel = (id: string) => {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) return null;

    tasks.splice(index, 1);

    return tasks;
}