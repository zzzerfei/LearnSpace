import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  // 这里因为要在模板中使用 所以必须是公共属性
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }
}
