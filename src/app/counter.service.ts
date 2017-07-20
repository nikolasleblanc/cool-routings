import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  counter: number = 0;
  // TODO: Use observable

  constructor() { }

  increment = () => {
    this.counter++;
  }

  decrement = () => {
    this.counter--;
  }

}
