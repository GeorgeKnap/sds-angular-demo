import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FleetsModule } from './fleets/fleets.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FleetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
