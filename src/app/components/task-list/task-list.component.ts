import { Component, OnInit } from '@angular/core';
import TaskService from 'src/app/services/task.service';
import { TaskList, Task } from 'src/app/models/task';
import { todosAllSelector } from 'src/app/state-manager/selectors';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { iniciarAction, markAsCompleted, removeTodo } from 'src/app/state-manager/actions';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})


export class TaskListComponent implements OnInit {

  todos$: Observable<Task[]> = this.store.select(todosAllSelector);

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.todos$.subscribe((todos) => {
     // console.log(todos);
     //me susbribo al observable, si no tiene elementos hago la llamada a la API.
      !todos.length ? this.store.dispatch(iniciarAction()) : null
    });
  }











}
