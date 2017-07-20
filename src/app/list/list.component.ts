import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CounterService } from "../counter.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public counterService: CounterService) { }

  ngOnInit() {
  }

}
