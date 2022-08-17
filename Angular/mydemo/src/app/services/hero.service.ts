import { Injectable } from '@angular/core';
import { Hero } from '../model/hero.model';

// 可观察的数据（Observable）
import { catchError, Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// 把这个类标记为依赖注入系统的参与者之一，会提供一个可注入服务
@Injectable({
  providedIn: 'root'
})

// 可以从任何地方获取数据 web服务 本地存储或者模拟数据
export class HeroService {
  private heroUrl = 'api/heroes'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // 服务中服务的场景
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  // 获取英雄列表数据
  getHeroes(): Observable<Hero[]> {
    // 用 http.get() 替换了 of()   这是因为这两个函数都返回了 Observable<Hero[]>
    return this.http.get<Hero[]>(this.heroUrl)
      .pipe(
        tap(_ => this.heroLog('获取用户数据')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      )
  }

  // 获取详情
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroUrl}/${id}`
    return this.http.get<Hero>(url)
      .pipe(
        tap(_ => this.heroLog(`获取用户${id}的详情`)),
        catchError(this.handleError<Hero>(`获取${id}的详情取`))
      )
  }

  // 修改英雄信息
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroUrl, hero, this.httpOptions)
      .pipe(
        tap(_ => this.heroLog(`修改用户${hero.id}信息`)),
        catchError(this.handleError<any>('修改信息'))
      )
  }

  // 添加新英雄
  addHero(hero: Hero): Observable<Hero> {
    let res = this.getHeroes()
    return this.http.post<Hero>(this.heroUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.heroLog(`添加新用户${newHero.id}`)),
      catchError(this.handleError<Hero>('添加新用户'))
    );
  }

  // 删除英雄
  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroUrl}/${id}`;
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.heroLog(`删除用户${id}`)),
      catchError(this.handleError<Hero>('删除用户'))
    );
  }

  // 搜索英雄
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.heroLog(`查询"${term}"`) :
        this.heroLog(`没有查询到"${term}"的结果`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.heroLog(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  // 消息记录方法
  heroLog(message: string) {
    this.messageService.add(message)
  }

}
