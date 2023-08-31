import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
  of,
  tap,
} from 'rxjs';

import { } from './selectors';
import { addTodo, iniciarAction, markAsCompleted } from './actions'
import { loadAllSuccess, loadAllError, addTodoSuccess, addTodoError, markAsCompletedError, markAsCompletedSuccess } from './api-actions'
import TaskService from '../services/task.service';

@Injectable()
export class TodosEffects {

  private loadAllWasExecuted = false;

  constructor(
    private actions$: Actions,
    private taskService: TaskService,
    private store: Store
  ) { }

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(iniciarAction),
      exhaustMap(() =>
        this.taskService.getAll().pipe(
          map((x) => loadAllSuccess({ x })),
          catchError(() =>
            of(
              loadAllError({
                errorMessage:
                  'Ha ocurrido un error al intentar obtener el listado de tareas de la API.',
              })
            )
          )
        )
      )
    )
  );



  // addTodo$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(addTodo),
  //     concatMap((action) =>
  //       this.taskService.create(action).pipe(
  //         map((x) => addTodoSuccess({x})),
  //         catchError(() =>
  //           of(
  //             addTodoError({
  //               errorMessage: `Ha ocurrido un error al intentar guardar la tarea: "${action}"`,
  //             })
  //           )
  //         )
  //       )
  //     )
  //   )
  // );



  // markTodoAsCompleted$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(markAsCompleted),
  //     concatMap((action) =>
  //       this.taskService.update(action).pipe(
  //         map(() => markAsCompletedSuccess()),
  //         catchError(() =>
  //           of(
  //             markAsCompletedError({
  //               task: action,
  //               errorMessage: `Ha ocurrido un error al intentar marcar la tarea "${action}" como completada.`,
  //             })
  //           )
  //         )
  //       )
  //     )
  //   )
  // );




  // removeTodo$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(TodosPageActions.removeTodo),
  //     mergeMap((action) =>
  //       this.todosService.delete(action.todo).pipe(
  //         map(() => TodosApiActions.removeTodoSuccess({ todo: action.todo })),
  //         catchError(() =>
  //           of(
  //             TodosApiActions.removeTodoError({
  //               errorMessage: `Ha ocurrido un error al intentar borrar la tarea: "${action.todo.description}"`,
  //             })
  //           )
  //         )
  //       )
  //     )
  //   )
  // );


  // markTodoAsPending$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(TodosPageActions.markAsPending),
  //     concatMap((action) =>
  //       this.todosService.update(action.todo).pipe(
  //         map(() => TodosApiActions.markAsPendingSuccess()),
  //         catchError(() =>
  //           of(
  //             TodosApiActions.markAsPendingError({
  //               todo: action.todo,
  //               errorMessage: `Ha ocurrido un error al intentar marcar la tarea "${action.todo.description}" como pendiente.`,
  //             })
  //           )
  //         )
  //       )
  //     )
  //   )
  // );

  // clearCompleted$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(TodosPageActions.clearCompleted),
  //     concatLatestFrom(() => this.store.select(TodosSelectors.completedTodos)),
  //     mergeMap(([action, completedTodos]) =>
  //       this.todosService.deleteMany(completedTodos).pipe(
  //         map(() =>
  //           TodosApiActions.clearCompletedSuccess({
  //             deletedTodos: completedTodos,
  //           })
  //         ),
  //         catchError(() =>
  //           of(
  //             TodosApiActions.clearCompletedError({
  //               errorMessage: `Ha ocurrido un error al intentar eliminar ${completedTodos.length} tarea(s) completada(s).`,
  //             })
  //           )
  //         )
  //       )
  //     )
  //   )
  // );

  // notifyApiError$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(
  //         TodosApiActions.loadAllError,
  //         TodosApiActions.addTodoError,
  //         TodosApiActions.removeTodoError,
  //         TodosApiActions.markAsCompletedError,
  //         TodosApiActions.markAsPendingError,
  //         TodosApiActions.clearCompletedError
  //       ),
  //       tap((action) => this.notificationsService.error(action.errorMessage))
  //     ),
  //   { dispatch: false }
  // );
}
