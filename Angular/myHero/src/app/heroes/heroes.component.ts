import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = []

  @Output() handleToggle = new EventEmitter();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeros()
  }

  // 从服务中获取英雄数据
  getHeros(): void {
    this.heroService.getHeros().subscribe(res => this.heroes = res.filter(i => i.status == true))
  }



  // 删除一个英雄
  delete(hero: Hero):void {
    this.heroes = this.heroes.filter(h => h !== hero)
    this.heroService.deleteHero(hero.id).subscribe()
  }

  // 
  complete(hero: Hero):void {
    hero.status = true
    console.log(hero);
    this.heroes = this.heroes.filter(h => h !== hero)
    this.heroService.dillHero(hero).subscribe()
  }

  // 修改事件状态
  toggle(): void {
    this.handleToggle.next(this);
  }


}
