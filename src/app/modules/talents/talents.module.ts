import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalentsRoutingModule } from './talents-routing.module';
import { TalentsListComponent } from './talents-list/talents-list.component';


@NgModule({
  declarations: [
    TalentsListComponent
  ],
  imports: [
    CommonModule,
    TalentsRoutingModule
  ]
})
export class TalentsModule { }
