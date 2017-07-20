import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from "./list.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', component: ListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ListComponent
  ]
})
export class ListModule { }
