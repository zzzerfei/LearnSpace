import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  // 获取英雄列表
  getHeros(): Observable<Hero[]> {
    console.log(status)

    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetch heroes')),
        catchError(this.handleError<Hero[]>('getHeros', []))
      )
  }

  // 获取英雄详情
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    )
  }

  // 添加一个英雄
  addHero(hero: Hero): Observable<Hero> {
    console.log(hero)
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => {
        console.log(newHero)
        this.log(`added hero id=${newHero.id}`)
      }),
      catchError(this.handleError<Hero>('addHero'))
    )
  }

  // 修改英雄信息
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    )
  }

  // 完成事件
  dillHero(hero: Hero): Observable<any> {
    return this.http.put<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`修改事项状态`)),
      catchError(this.handleError<any>('updateHero'))
    )
  }

  // 删除一个英雄
  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    )
  }



  // 搜索英雄
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([])
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)
      ),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    )
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`)
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
