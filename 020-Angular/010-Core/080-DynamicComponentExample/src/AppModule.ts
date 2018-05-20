import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppComponent from './AppComponent';
import AppDetailComponent from './AppDetailComponent';
import AppDynamicComponent from './AppDynamicComponent';


@NgModule({
    declarations: [
      AppComponent,
      AppDetailComponent,
      AppDynamicComponent
    ],
    imports: [
      BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
export default class AppModule {
    

}


