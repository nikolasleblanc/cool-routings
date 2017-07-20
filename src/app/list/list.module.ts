import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from "./list.component";
import { RouterModule, Routes } from "@angular/router";
import { NumbersComponent } from "./numbers/numbers.component";
import { LettersComponent } from "./letters/letters.component";
import { SymbolsComponent } from "./symbols/symbols.component";
import { SharedModule } from "../modules/shared/shared.module";

const routes: Routes = [
  { path: '', component: ListComponent,
    children: [
      { path: 'numbers', component: NumbersComponent },
      { path: 'letters', component: LettersComponent },
      { path: 'symbols', component: SymbolsComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    ListComponent,
    NumbersComponent,
    LettersComponent,
    SymbolsComponent
  ]
})
export class ListModule { }
