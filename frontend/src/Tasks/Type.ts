export type TaskType  = {
    id: number;
    name: string;
    completed: boolean;
    date: Date;
    priority: string;
    category: string;
}

export type TasksType = {
    tasks: TaskType[];
};