import { Component, ViewEncapsulation } from '@angular/core';
import { CounterService } from "./counter.service";
import { environment } from "../environments/environment";
import { ConfigService } from "./services/config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class AppComponent {
  title = 'app';

  constructor(
    public counterService: CounterService,
    public configService: ConfigService
  ) {
    console.log(environment.api, configService.config$.subscribe(e => console.log(e)));
  }
}
