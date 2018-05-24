import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppComponent from './AppComponent';
import AppDetailComponent from './AppDetailComponent';
import DynamicContainerComponent from './DynamicContainerComponent';
import DragDropDirective from './DragDropDirective';
import InputComponent from './components/InputComponent';


@NgModule({
    declarations: [
      AppComponent,
      AppDetailComponent,
      DynamicContainerComponent,
      DragDropDirective,
      InputComponent
    ],
    entryComponents:[
      DynamicContainerComponent,
      InputComponent
    ],
    imports: [
      BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
export default class AppModule {
    


}


