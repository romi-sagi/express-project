import taskDal from "../dal/taskDal";
import { CreateTaskDetails, Task } from "../taskDto";

const getTasks = (queryFilter?: string): Task[] => {
    return taskDal.getTasks(queryFilter);
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

const updateTask = (taskId: string, updatedTask: Task): Task => {
    return taskDal.updateTask(taskId, updatedTask)
}

export default {
    getTasks,
    getTaskById,
    deleteTaskById,
    createTask,
    updateTask
};