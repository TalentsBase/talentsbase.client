import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TalentsListComponent} from "./talents-list/talents-list.component";

const routes: Routes = [
  {
    path: '',
    component: TalentsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentsRoutingModule { }
