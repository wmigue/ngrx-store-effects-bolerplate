import { createAction, props } from '@ngrx/store';
import { Task } from '../models/task';

export const iniciarAction = createAction('[Todos Page] Init');


export const markAsCompleted = createAction(
  '[Todos Page] Mark as Completed',
  props<Task>()
);

export const addTodo = createAction(
    '[Todos Page] Add Todo',
    props<Task>()
  );
  
export const removeTodo = createAction(
  '[Todos Page] Remove Todo',
  props<Task>()
);





// export const markAsCompleted = createAction(
//   '[Todos Page] Mark as Completed',
//   props<{ todo: Todo }>()
// );

// export const markAsPending = createAction(
//   '[Todos Page] Mark as Pending',
//   props<{ todo: Todo }>()
// );

// export const clearCompleted = createAction('[Todos Page] Clear Completed');
