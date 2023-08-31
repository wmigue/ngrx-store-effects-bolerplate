import { createAction, props } from '@ngrx/store';
import { Task, TaskList, initialStateTaskList } from '../models/task'

export const loadAllSuccess = createAction(
    '[Todos API] Load All Success',
    props<{ x: TaskList }>()
);

export const loadAllError = createAction(
    '[Todos API] Load All Error',
    props<{ errorMessage: string }>()
);

export const markAsCompletedSuccess = createAction(
    '[Todos API] Mark Todo As Completed Success'
);

export const markAsCompletedError = createAction(
    '[Todos API] Mark Todo As Completed Error',
    props<{ task: Task; errorMessage: string }>()
);


export const addTodoSuccess = createAction(
    '[Todos API] Add Todo Success',
    props<{x: Task}>()
);

export const addTodoError = createAction(
    '[Todos API] Add Todo Error',
    props<{ errorMessage: string }>()
);
