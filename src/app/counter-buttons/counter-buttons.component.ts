import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  @Input() counter$;
  @Output() increment: EventEmitter<null> = new EventEmitter();
  @Output() decrement: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
