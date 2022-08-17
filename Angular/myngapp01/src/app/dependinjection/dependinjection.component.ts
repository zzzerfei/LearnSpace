import { Component, OnInit } from '@angular/core';
import { DependinjectionService } from './dependinjection.service';

@Component({
  selector: 'app-dependinjection',
  templateUrl: './dependinjection.component.html',
  styleUrls: ['./dependinjection.component.sass']
})
export class DependinjectionComponent implements OnInit {
  // 声明依赖
  log = null
  constructor(log:DependinjectionService) {  // 声明依赖
    // this.log = log
  }

  ngOnInit(): void {
  }

  doAdd() {
    console.log('正在执行添加')
    let action = '添加了新产品111'
    // this.log.doLog(action)
  }
  doDelete() {
    console.log('正在执行删除')
    let action = '删除了新产品111'
  }
}
