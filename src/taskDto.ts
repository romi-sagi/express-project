export type Iteration = 'daily' | 'weekly' | 'monthly' | null;

export interface Task {
    id: string,
    title: string,
    description?: string,
    completed: boolean,
    myDay: boolean,
    dueDate?: Date,
    repeat?: Iteration
}

export interface CreateTaskDetails {
    title: string,
    description?: string,
    completed: boolean,
    myDay: boolean,
    dueDate?: Date,
    repeat?: Iteration
}