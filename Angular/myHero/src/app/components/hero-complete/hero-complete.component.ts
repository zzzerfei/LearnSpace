import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-hero-complete',
  templateUrl: './hero-complete.component.html',
  styleUrls: ['./hero-complete.component.css']
})
export class HeroCompleteComponent implements OnInit {
  heroes: Hero[] = []
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }
  getHeroes(): void {
    this.heroService.getHeros()
      .subscribe(res => this.heroes = res.filter(i => i.status == false))
  }

}
