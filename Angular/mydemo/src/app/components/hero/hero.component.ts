import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero.model';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroes: Hero[] = []
  selectedHero?: Hero

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  // 点击事件
  onSelect(hero: Hero): void {
    this.selectedHero = hero
    this.messageService.add(`点击了英雄${hero.name}`)
  }

  // 网络请求方法
  // 订阅获取信息
  // 获取英雄数据
  getHeroes():void {
    // heroService 返回一个 Observable<Hero[]> 形式也必须看齐
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }


}
