import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', status: 0 },
      { id: 13, name: 'Bombasto', status: 1 },
      { id: 14, name: 'Celerit123123as', status: 0 },
      { id: 15, name: '123', status: 1 },
      { id: 16, name: '12323', status: 1 },
      { id: 17, name: 'Cele123ritas', status: 1 },
      { id: 18, name: 'Celeritas', status: 1 },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  genStatus(heroes: Hero[]):number {
    return 0
  }
}