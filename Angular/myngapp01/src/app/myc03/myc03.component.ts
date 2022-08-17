import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'yh-myc03',
  templateUrl: './myc03.component.html',
  styleUrls: ['./myc03.component.sass']
})
export class Myc03Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() name = ''

  @Output() voted = new EventEmitter<boolean>()

  didVote = false

  vote(agreed: boolean) {
    this.voted.emit(agreed)
    this.didVote = true
  }


}
