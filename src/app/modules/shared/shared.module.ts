import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../button/button.component";
import { CounterService } from "../../counter.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent
  ],
  exports: [
    ButtonComponent
  ],
  providers: [
    CounterService
  ]
})
export class SharedModule { }
