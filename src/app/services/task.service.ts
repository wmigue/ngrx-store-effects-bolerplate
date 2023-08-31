import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { TaskList, Task } from '../models/task';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export default class TaskService {
    API_URL = 'https://dummyjson.com/todos';

    constructor(private http: HttpClient) { }

    getAll(): Observable<TaskList> {
        return this.http.get<TaskList>(`${this.API_URL}`);
    }

    update(task: Task): Observable<Task> {
        return this.http.put<Task>(`${this.API_URL}`, task);
    }

    create(task: Task): Observable<Task> {
        return this.http.post<Task>(`${this.API_URL}`, task)

    }

}