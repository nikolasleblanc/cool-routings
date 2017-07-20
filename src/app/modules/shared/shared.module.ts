import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../button/button.component";
import { CounterButtonsComponent } from "../../counter-buttons/counter-buttons.component";
import { CounterService } from "../../counter.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CounterButtonsComponent,
    ButtonComponent
  ],
  exports: [
    ButtonComponent,
    CounterButtonsComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [CounterService]
    };
  }
 }
