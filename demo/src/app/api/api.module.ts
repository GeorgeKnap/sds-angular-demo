import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdministrationApiModule } from './administration/administration-api.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdministrationApiModule
  ],
  exports: [
    AdministrationApiModule
  ]
})
export class ApiModule { }
