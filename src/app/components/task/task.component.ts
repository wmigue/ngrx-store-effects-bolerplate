import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task, initialStateTask } from 'src/app/models/task';
import { markAsCompleted, removeTodo } from 'src/app/state-manager/actions';
import { todosAllSelector } from 'src/app/state-manager/selectors';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task = initialStateTask;

  todos$: Observable<Task[]> = this.store.select(todosAllSelector);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  handleComplete(): void {
    this.store.dispatch(markAsCompleted(this.task));
  }

  handleDelete(): void {
    this.store.dispatch(removeTodo(this.task));
  }

}
