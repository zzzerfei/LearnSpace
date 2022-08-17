import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyPage } from '../my-page/my-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToMyPage(detailInfo) {
    console.log(this.navCtrl)
    this.navCtrl.push('MyPage');
  }
}
