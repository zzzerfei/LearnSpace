import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { v4 } from 'uuid';
import { Todo } from '../model/todo.model';



@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoUrl = 'api/todoes'


  private headers = new HttpHeaders().set("Content-Type", "application/json")


  constructor(
    private http: HttpClient
  ) { }

  // 获取事项数据
  getTodoList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoUrl)
  }

  // 改变任务状态
  changeStatus(todo: Todo): Observable<any> {
    console.log(todo)
    // console.log(todo.id)
    // const url = `${this.todoUrl}/${todo.id}`
    return this.http.put(this.todoUrl, todo, {headers:this.headers})
  }

  // 添加任务事项
  add(todo: Todo): Observable<Todo> {
    todo.completed = false
    // todo.id = v4()
    return this.http.post<Todo>(this.todoUrl, todo,{headers:this.headers})
  }

  // 删除任务事项
  delete(id: string): Observable<Todo> {
    console.log(id)
    const url = `${this.todoUrl}/${id}`
    return this.http.delete<Todo>(url, {headers:this.headers})
  }

}
