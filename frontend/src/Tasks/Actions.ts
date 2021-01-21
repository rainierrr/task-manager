import { Action, Dispatch } from 'redux';
import axios from 'axios'
import { TaskType } from './Type'
export type Actions = (
  | AddTaskAction
  | DeleteTaskAction
  | CheckTaskAction
  | DeleteAllCompletedTaskAction
  | Fetch_Tasks
);


export interface AddTaskAction extends Action {
    type: 'ADD_TASK';
    name: string;
    category: string,
    priority: string,
    date: Date
}
export interface Fetch_Tasks extends Action {
  type: 'FETCH_TASKS';
  response: TaskType;
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
const ROOT_URL = 'http://localhost:8000'
const TOKEN = '69ebbef3b9f2d7b663b150e0c97b5c59e9ee1a5d'

export const fetchTasks = async(dispatch :Dispatch) => {
  console.log('Go')
  const response = await axios.get(`${ROOT_URL}/api/tasks/`,{
    headers: {
      'Authorization': TOKEN
    }
  })
  for(const key in response.data) {
    dispatch({ type: 'FETCH_TASKS', response: response.data[key]})
  }
  console.log('Go')
}

