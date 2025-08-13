import { Task } from "../taskDto";

export const convertTaskToDto = (task: Task): Task => ({
    id: task.id,
    title: task.title,
    completed: task.completed,
    myDay: task.myDay,
    description: task.description,
    dueDate: task.dueDate,
    repeat: task.repeat,
});