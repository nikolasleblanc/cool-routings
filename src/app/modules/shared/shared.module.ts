import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../button/button.component";
import { CounterButtonsComponent } from "../../counter-buttons/counter-buttons.component";
import { CounterService } from "../../counter.service";
import { CheckComponent } from './../../check/check.component';
import { ConfigService } from "../../services/config.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CounterButtonsComponent,
    ButtonComponent,
    CheckComponent
  ],
  exports: [
    ButtonComponent,
    CounterButtonsComponent,
    CheckComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        CounterService,
        ConfigService
      ]
    };
  }
 }
