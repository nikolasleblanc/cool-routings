import { Component, OnInit, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit, DoCheck {

  @Input() config$;

  check = Date.now().toString();

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.check = Date.now().toString();
  }

}
