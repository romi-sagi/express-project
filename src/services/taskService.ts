import taskDal from "../dal/taskDal";
import { CreateTask, Task } from "../taskDto";

const getAllTasks = (): Task[] => {
    return taskDal.getAllTasks();
}

const getTaskById = (id: string): Task | undefined => {
    return taskDal.getTaskById(id);
}

const deleteTaskById = (id: string) => {
    return taskDal.deleteTaskById(id);
}

 export const createTask = (requestBody: CreateTask) => {
    return taskDal.createTask(requestBody);
}

export default {
    getAllTasks,
    getTaskById,
    deleteTaskById,
    createTask
};