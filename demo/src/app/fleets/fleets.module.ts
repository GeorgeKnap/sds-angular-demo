import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiModule } from '../api/api.module';
import { FleetsListComponent } from './fleets-list/fleets-list.component';



@NgModule({
  declarations: [FleetsListComponent],
  imports: [
    CommonModule,
    ApiModule
  ],
  exports: [FleetsListComponent]
})
export class FleetsModule { }
