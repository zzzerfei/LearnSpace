import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { Todo } from 'src/app/model/todo.model';
import { StorageService } from 'src/app/services/storage.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: any[] = []

  currentStatus: string | null = ''
  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    console.log(this.todoList)
    this.route.params.subscribe(
      params => {
        this.currentStatus = params['status']
        this.getTodo()
      }
    )
  }

  // 获取事项列表
  getTodo(): void {
    /*    this.todoService.getTodoList()
         .subscribe(todo => {
           console.log(this.currentStatus)
           switch (this.currentStatus) {
             case 'todo':
               console.log(todo)
               this.todoList = todo.filter(todo => !todo.completed)
               break
             case 'completed':
               this.todoList = todo.filter(todo => todo.completed)
               break
             default:
               this.todoList = todo
               break
           }
         }) */
    let res: [] = this.storageService.get('todolist')
    if (res) {
      console.log(this.currentStatus)
      switch (this.currentStatus) {
        case 'todo':
          console.log(res)
          this.todoList = res.filter(todo => !todo['completed'])
          break
        case 'completed':
          this.todoList = res.filter(todo => todo['completed'])
          break
        default:
          this.todoList = res
          break
      }
    }
  }


  // 改变任务状态
  toggle(item: Todo): void {
    /*     item.completed = !item.completed
        this.todoService.changeStatus(item)
        this.getTodo() */
    this.todoList.forEach(todo => {
      if (todo.title === item.title) {
        item.completed = !item.completed
      }
    })
    console.log('------',this.todoList)
    this.storageService.set('todolist', this.todoList)

    this.getTodo()
  }

  // 删除任务
  remove(index: number) {
    /*  console.log('删除')
     this.todoList = this.todoList.filter(t => t !== todo)
     this.todoService.delete(todo.id).subscribe() */
    this.todoList.splice(index, 1)
    this.storageService.set('todolist', this.todoList)
  }

  // 添加
  addTodo(title: string): void {
    /*     console.log(title)
        title = title.trim()
        if (!title) return
        this.todoService.add({ title } as Todo)
          .subscribe(todo =>
            this.todoList.push(todo)
          ) */
    this.todoList.push({
      title,
      completed: false
    })
    this.storageService.set('todolist', this.todoList)
  }


}
