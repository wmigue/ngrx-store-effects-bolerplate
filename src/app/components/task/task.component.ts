import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  initialValues = {
    id: 0,
    todo: '',
    completed: false,
    userId: 0,
  }
  
  @Input() task: Task = this.initialValues;

  constructor() { }

  ngOnInit(): void {
  }

}
