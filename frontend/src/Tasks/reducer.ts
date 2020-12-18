import { Actions } from './Actions';
import { TasksType } from './Type'
import { APP_KEY } from './index'

const initialState = (): TasksType => {
	const tasksState = localStorage.getItem(APP_KEY)
	if (tasksState){
		return JSON.parse(tasksState)
	}else{
		return {
			tasks: [],
		};
	}
};

const taskReducer = (state: TasksType = initialState(), action: Actions) => {
  switch (action.type) {
    case 'ADD_TASK':
			const length = state.tasks.length
			const id = length === 0 ? 0 : state.tasks[length - 1].id + 1
      return {
        tasks: [
          ...state.tasks,
          {
            id,
            text: action.text,
            completed: false,
          },
        ],
			};
	case 'DELETE_TASK':
		return  { tasks: [ ...(state.tasks.filter(( task ) => task.id !== action.id)) ]}
	case 'DELETE_ALL_COMPLETED_TASK_ACTION':
		return  { tasks: [ ...(state.tasks.filter(( task ) => !(task.completed))) ]}
	case 'CHECK_TASK':
		return { tasks: [ ...(state.tasks.map(( task ) => task.id === action.id ? {id:task.id, text:task.text, completed: action.completed} : task)) ]}
    default:
      return state
  }
}
export default taskReducer