import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { TaskList } from '../models/task';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export default class TaskService {
    API_URL = 'https://dummyjson.com/todos';
    constructor(private http: HttpClient) { }
    getAll():Observable<TaskList> {
        return this.http.get<TaskList>(`${this.API_URL}`);
    }

}