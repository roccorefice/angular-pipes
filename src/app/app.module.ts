import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {registerLocaleData} from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { UcfirstPipe } from './ucfirst.pipe';
registerLocaleData(localeIt);

@NgModule({
  declarations: [
    AppComponent,
    UcfirstPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
