import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task, initialStateTask } from 'src/app/models/task';
import { todosAllSelector } from 'src/app/state-manager/selectors';
import { addTodo } from 'src/app/state-manager/actions';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  todos$: Observable<Task[]> = this.store.select(todosAllSelector);

  nuevaTarea: string = '';

  constructor(private store: Store) { }

  submit() {
   // console.log('Nueva tarea:', this.nuevaTarea);
    this.agregar(this.nuevaTarea);
  }

  agregar(description: string): void {
    const newTodo: Task = {
      id: Number(Math.round(Date.now() * Math.random() * 9)),
      todo: description,
      completed: true,
      userId: 1,
    }
    this.store.dispatch(addTodo(newTodo));
  }

  ngOnInit(): void {
  }

}
