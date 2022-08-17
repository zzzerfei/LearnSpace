import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/model/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  currentStatus = ''
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    console.log(this.route);
    this.getStatus()
  }

  getStatus(): void {
    this.route.params.subscribe(
      status => {
        console.log(status)
      }
    )
  }



}
