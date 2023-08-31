import { createReducer, on } from '@ngrx/store';
import { addTodo, iniciarAction, markAsCompleted, removeTodo } from './actions'
import { addTodoSuccess, loadAllError, loadAllSuccess } from './api-actions'
import { initialStateTaskList } from '../models/task';

export const todosStateFeatureKey = 'todosState';

export const todosReducer = createReducer(
    initialStateTaskList,

    on(loadAllSuccess, (state, action) => ({
        ...state,
        todos: action.x.todos,
    })),

    on(markAsCompleted,
        //  markAsPendingError,
        (state, action) => ({
            ...state,
            todos: state.todos.map((todo) =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            ),
        })
    ),

    on(addTodo, (state, action) => ({
        ...state,
        todos: [...state.todos, action],
    })),

    on(removeTodo, (state, action) => ({
        ...state,
        todos: state.todos.filter(x => x.id !== action.id),
    }))


);
