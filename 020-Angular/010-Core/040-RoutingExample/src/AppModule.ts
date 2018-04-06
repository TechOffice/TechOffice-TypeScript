import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppComponent from './AppComponent';
import { RouterModule } from '@angular/router';
import Test2Component from './Test2Component';
import Test1Component from './Test1Component';
import { AppRoutingModule } from './AppRoutingModule';

@NgModule({
    declarations: [
      AppComponent,
      Test1Component,
      Test2Component
    ],
    imports: [
      BrowserModule,
      AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
export default class AppModule {
    

}


