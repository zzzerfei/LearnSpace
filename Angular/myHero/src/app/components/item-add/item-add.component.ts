import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  heroes: Hero[] = []
  constructor(
    private heroService: HeroService,
    public changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }
  // 添加一个英雄
  add(name: string): void {
    let res = {
      name: name.trim(),
      status: false
    }
    if (!name) { return }
    this.heroService.addHero(res as Hero)
      .subscribe(res => {
        this.heroes.push(res)
      })
    // this.heroService.getHeros()
    this.changeDetectorRef.markForCheck()
  }
}
