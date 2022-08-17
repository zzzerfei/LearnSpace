import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {
  empList = ['zyh', 'erfei', '二肥', '月巴']
  isGetThis = true
  // 绑定的样式对象
  myStyleObj = {
    backgroundColor: 'black',
    color: 'red',
    'border-color': 'red'
  }
  // 绑定的类对象
  myClassObj = {
    btn: true,
    'btn-danger': false,
    'btn-success': true
  }
  // level = 'normal'
  level = 'vip'

  username = 'zyh'
  changeValue = ''

  constructor() { }

  ngOnInit(): void {
  }
  btnchange() {
    console.log(this.isGetThis)
    this.isGetThis = !this.isGetThis
  }
  loadMore() {
    this.myClassObj['btn-danger'] = true,
      this.myClassObj['btn-success'] = false
  }
  doValueChange() {
    console.log(this.changeValue)
  }
}
