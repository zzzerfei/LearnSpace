import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from '../../../../model/hero.model'
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero

  // 注入 Location HeroService ActivedRoute
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero()
  }

  // 根据传来的 id 获取详情
  getHero(): void {
    // route.snapshot 是一个路由信息的静态快照，抓取自组件刚刚创建完毕之后
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero)
  }

  // 修改英雄信息
  save(): void {
    if(this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack())
    }
  }

  // 后退事件
  goBack(): void {
    this.location.back();
  }
}
