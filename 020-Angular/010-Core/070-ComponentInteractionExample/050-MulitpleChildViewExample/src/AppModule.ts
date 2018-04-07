import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import AppComponent from './AppComponent';
import AppDetailComponent from './AppDetailComponent';


@NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      BrowserModule
    ],
    declarations: [
      AppComponent,
      AppDetailComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
export default class AppModule {
    
}


