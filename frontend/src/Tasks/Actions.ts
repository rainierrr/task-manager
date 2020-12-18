import { Action } from 'redux';
export type Actions = (
  | AddTaskAction
  | DeleteTaskAction
  | CheckTaskAction
  | DeleteAllCompletedTaskAction
);

export interface AddTaskAction extends Action {
    type: 'ADD_TASK';
    text: string;
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

export function addTaskAction(text:string) : AddTaskAction {
  return {
    type: 'ADD_TASK',
    text,
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
