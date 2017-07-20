import { Component, OnInit, Output, EventEmitter, Input, OnChanges, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { ConfigService } from "../services/config.service";

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterButtonsComponent implements OnInit, DoCheck {

  @Input() counter$;
  @Output() increment: EventEmitter<null> = new EventEmitter();
  @Output() decrement: EventEmitter<null> = new EventEmitter();

  check = Date.now().toString();

  constructor(public configService: ConfigService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.check = Date.now().toString();
  }

}
