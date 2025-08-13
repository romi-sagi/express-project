import taskDal from "../dal/taskDal";
import { Task } from "../taskDto";

const getAllTasks = (): Task[] => {
    return taskDal.getAllTasks();
}

const getTaskById = (id: string): Task | undefined => {
    return taskDal.getTaskById(id);
}

const deleteTaskById = (id: string) => {
    return taskDal.deleteTaskById(id);
}

export default {
    getAllTasks,
    getTaskById,
    deleteTaskById
};