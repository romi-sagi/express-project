import taskDal from "../dal/taskDal";
import { Task } from "../taskDto";

const getAllTasks = (): Task[] => {
    return taskDal.getAllTasks();
}

const getTaskById = (id: string): Task | undefined => {
    return taskDal.getTaskById(id);
}

export const filterByMyDay = () => {
    return taskDal.filterByMyDay();
}

const deleteTaskById = (id: string) => {
    return taskDal.deleteTaskById(id);
}

export default {
    getAllTasks,
    getTaskById,
    filterByMyDay,
    deleteTaskById
};