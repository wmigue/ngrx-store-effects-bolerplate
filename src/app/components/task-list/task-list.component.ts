import { Component, OnInit } from '@angular/core';
import TaskService from 'src/app/services/task.service';
import { TaskList } from 'src/app/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})


export class TaskListComponent implements OnInit {

  private initialValues = {
    todos: [],
    total: 0,
    skip: 0,
    limit: 0,
  }

  tasks: TaskList = this.initialValues;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getAll().subscribe((x: TaskList) => {
      this.tasks = x
      //console.log(this.tasks.todos)
    })
  }

}
