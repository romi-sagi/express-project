import { FilterError } from "./errorValidation/filterError";
import { Iteration, Task } from "./taskDto";

const allowedIterations = ["daily", "weekly", "monthly", "yearly", null];

const isValidIteration = (value: Iteration): boolean => {
    return allowedIterations.includes(value);
}

const isValidDueDate = (dueDate: Date): boolean => {
    const newDate = new Date(dueDate);

    return !isNaN(newDate.getTime());
}

export const isValidTask = (task: Task): boolean => {
    return (task.id === undefined &&
        typeof task.title === 'string' &&
        typeof task.completed === 'boolean' &&
        typeof task.myDay === 'boolean' &&
        (task.description === undefined || typeof task.description === 'string') &&
        (task.dueDate === undefined || isValidDueDate(task.dueDate)) &&
        (task.repeat === undefined || isValidIteration(task.repeat))
    );
}

export const validateFilter = (filter?: string) => {
    if (!filter) return;

    if (filter === 'myday') return filter;

    throw new FilterError('invalid filter');
}