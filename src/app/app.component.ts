import { Component, ViewEncapsulation, OnChanges, DoCheck } from '@angular/core';
import { CounterService } from "./counter.service";
import { environment } from "../environments/environment";
import { ConfigService } from "./services/config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'app';
  check = Date.now().toString();

  constructor(
    public counterService: CounterService,
    public configService: ConfigService
  ) {}

  ngDoCheck() {
    this.check = Date.now().toString();
  }
}
