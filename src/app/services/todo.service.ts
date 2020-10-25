import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: 'https://jsonplaceholder.typicode.com/todos'

  constructor(private http:HttpClient) { }

  getTodos() {
    this.http.get<Todo[]>();
  }
}


//Stop at 47.00