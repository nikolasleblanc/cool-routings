import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CounterService {

  counter: number = 0;
  counter$ = new BehaviorSubject(0);
  // TODO: Use observable

  constructor() { }

  increment = () => {
    this.counter$.next(this.counter$.getValue() + 1);
    this.counter++;
  }

  decrement = () => {
    this.counter$.next(this.counter$.getValue() - 1);
    this.counter--;
  }

}
