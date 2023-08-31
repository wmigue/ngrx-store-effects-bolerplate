import { createFeatureSelector, createSelector } from '@ngrx/store';
import { todosReducer, todosStateFeatureKey } from './reducers';
import { TaskList } from '../models/task';

const todosState = createFeatureSelector<TaskList>(todosStateFeatureKey);

export const todosAllSelector = createSelector(
    todosState,
    (todosState) => todosState.todos,
);








// export const hasCompletedTodos = createSelector(todos, (todos) =>
//   todos.some((todo) => todo.completed)
// );

// export const completedTodos = createSelector(todos, (todos) =>
//   todos.filter((todo) => todo.completed)
// );
