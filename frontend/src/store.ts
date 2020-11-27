import  TaskListReducer  from './TaskList/reducer';
import { createStore } from 'redux';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    TaskListReducer: TaskListReducer
});

export const store = createStore(rootReducer);