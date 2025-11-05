import taskDal from "../dal/taskDal";
import { CreateTaskDetails, Task } from "../taskDto";

const getTasks = (filter: string | undefined): Task[] | undefined => {
    return taskDal.getTasks(filter);
}

const getTaskById = (id: string): Task | undefined => {
    return taskDal.getTaskById(id);
}

const deleteTaskById = (id: string) => {
    return taskDal.deleteTaskById(id);
}

export const createTask = (requestBody: CreateTaskDetails) => {
    return taskDal.createTask(requestBody);
}

export default {
    getTasks,
    getTaskById,
    createTask,
    deleteTaskById
};