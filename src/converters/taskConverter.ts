import { Task } from "../taskDto";

export const taskConverterToDto = (task: Task): Task => {
    const newTask: Task = {
        id: task.id,
        title: task.title,
        completed: task.completed,
        myDay: task.myDay,
    };

    if (task.description !== undefined) newTask.description = task.description;
    if (task.dueDate !== undefined) newTask.dueDate = task.dueDate;
    if (task.repeat !== undefined) newTask.repeat = task.repeat;

    return newTask;
};

export const tasksConverterToDto = (tasks: Task[]): Task[] => {
    return tasks.map(taskConverterToDto);
}