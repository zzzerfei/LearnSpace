import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Hero } from 'src/app/model/hero.model';
import { HeroService } from 'src/app/services/hero.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // $ 约定这是一个 Observable 而不是数组
  heroes$!: Observable<Hero[]>;
  // Subject 类型 可观察对象数据源
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }
  search(term: string): void {
    // 调用 next 方法往 Observable 中推送一些值
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    // 如果按建就输入的话会造成过多的请求
    // 通过 RxJS 操作符用于缩减 searchHeroes 调用次数
    this.heroes$ = this.searchTerms.pipe(
      // 延时
      debounceTime(300),
      // 确保只在过滤条件变化时才发送请求
      distinctUntilChanged(),
      // switchMap 会记住原始的请求顺序 只返回最近一次 HTTP 方法调用的结果
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}