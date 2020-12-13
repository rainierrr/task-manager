export type TaskType  = {
    id: number;
    text: string;
    completed: boolean;
}

export type TasksType = {
    tasks: TaskType[];
};