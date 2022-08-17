import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  currentCustomer = 'erfei'
  title = '属性绑定'
  num = 0
  agreed = 0;
  disagreed = 0;
  voters = ['Dr IQ', 'Celeritas', 'Bombasto'];

  getVal() {
    return 2
  }
  getbox() {
    alert('点击按钮我就弹出来啦！')
  }
  add() {
    this.num++
  }
  jian() {
    this.num--
  }

  // 子传父
  onVoted(agreed: boolean) {
    if (agreed) {
      this.agreed++
    } else {
      this.disagreed++
    }
  }
}
