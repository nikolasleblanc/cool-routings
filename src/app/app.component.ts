import { Component, ViewEncapsulation } from '@angular/core';
import { CounterService } from "./counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None 
})
export class AppComponent {
  title = 'app';

  constructor(public counterService: CounterService) {}
}
