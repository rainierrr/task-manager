import  taskReducer  from './Tasks/reducer';
import { createStore } from 'redux';
import { combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'

export const rootReducer = combineReducers({
    tasks: taskReducer
});

interface ExtendedWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
  declare var window: ExtendedWindow;

const composeReduxDevToolsEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// TODO: 適宜ミドルウェア定義


export const store = createStore(
    rootReducer,
    composeReduxDevToolsEnhancers(applyMiddleware(thunk))
    );

export type RootState = ReturnType<typeof rootReducer>
export default store;