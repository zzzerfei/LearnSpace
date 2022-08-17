import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../model/hero.model';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: '二肥' },
      { id: 2, name: '张亿晖' },
      { id: 3, name: '小蓝' },
      { id: 4, name: '小红' },
      { id: 5, name: '小橙' },
      { id: 6, name: '小黄' },
      { id: 7, name: '小绿' },
      { id: 8, name: '小青' },
      { id: 9, name: '小紫' },
    ];
    const todoes = [
      { id: '1', title: 'Tornado', completed:true }
    ]
    return { heroes, todoes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    console.log(heroes.length)
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }

}