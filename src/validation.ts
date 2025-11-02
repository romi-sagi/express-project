import { Iteration, Task } from "./taskDto";

const allowedRepeats = ["daily", "weekly", "monthly", "yearly", null];

const isvalidIterationValue = (value: Iteration): boolean => {
    return allowedRepeats.includes(value);
}

const isvalidDateValue = (dueDate: Date): boolean => {
    const newDate = new Date(dueDate);

    return !isNaN(newDate.getTime());
}

export const isValidTask = (task: Task): boolean => {
    return (task.id === undefined &&
        typeof task.title === 'string' &&
        typeof task.completed === 'boolean' &&
        typeof task.myDay === 'boolean' &&
        (task.description === undefined || typeof task.description === 'string') &&
        (task.dueDate === undefined || isvalidDateValue(task.dueDate)) &&
        (task.repeat === undefined || isvalidIterationValue(task.repeat))
    );
}