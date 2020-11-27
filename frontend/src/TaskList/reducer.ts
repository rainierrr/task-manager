import { AddTodoAction } from './Actions';

export type State = {    
    todos: {
        id: number;     
        text: string;
        completed: boolean;
    }[];
};

const init = (): State => {
    return {
        todos: [],
    };
};

const TaskListReducer = (state: State = init(), action: AddTodoAction) => {
  switch (action.type) {

    case 'ADD_TODO':
        return {
            todos: [
                ...state.todos,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                },
            ],
        };
    default:
      return state
  }
}
export default TaskListReducer