import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero.model';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

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
  getHeroes(): void {
    // heroService 返回一个 Observable<Hero[]> 形式也必须看齐
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }
  // 添加
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  // 删除
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
