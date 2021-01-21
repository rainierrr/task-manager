import { Action } from 'redux';
export type Actions = (
  | AddTaskAction
  | DeleteTaskAction
  | CheckTaskAction
  | DeleteAllCompletedTaskAction
);

export interface AddTaskAction extends Action {
    type: 'ADD_TASK';
    name: string;
    category: string,
    priority: string,
    date: Date
}

export interface DeleteTaskAction extends Action {
  type: 'DELETE_TASK';
  id: number;
}

export interface DeleteAllCompletedTaskAction extends Action {
  type: 'DELETE_ALL_COMPLETED_TASK_ACTION';
}

export interface CheckTaskAction extends Action {
  type: 'CHECK_TASK';
  id: number;
  completed: boolean;
}

export function addTaskAction(name:string, category:string, priority: string, date: Date) : AddTaskAction {
  return {
    type: 'ADD_TASK',
    name,
    category,
    priority,
    date
  }
}

export function deleteTaskAction(id:number) : DeleteTaskAction {
  return {
    type: 'DELETE_TASK',
    id
  }
}

export function deleteAllCompletedTaskAction() : DeleteAllCompletedTaskAction {
  return {
    type: 'DELETE_ALL_COMPLETED_TASK_ACTION'
  }
}

export function checkTaskAction(id:number, completed:boolean) : CheckTaskAction {
  return {
    type: 'CHECK_TASK',
    id,
    completed
  }
}
