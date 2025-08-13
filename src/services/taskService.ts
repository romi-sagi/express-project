import taskDal from "../dal/taskDal";
import { Task } from "../taskDto";

const getAllTasks = (): Task[] => {
    return taskDal.getAllTasks();
}

const getTaskById = (id: string): Task | null => {
    return taskDal.getTaskById(id);
}

export default {
    getAllTasks,
    getTaskById
};