import { Injectable } from '@angular/core'
import { ITodo } from '../models/todo.model'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<ITodo[]> {
    const URL = 'http://localhost:5000/api/todos'

    return this.http.get<ITodo[]>(URL)
  }
}
