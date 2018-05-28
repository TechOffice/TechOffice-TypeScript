import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppComponent from './AppComponent';
import InputComponent from './components/InputComponent';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import DesignerComponent from './designer/DesignerComponent';
import DesingerAttributeComponent from './designer/DesignerAttributeComponent';
import DynamicContainerComponent from './designer/DynamicContainerComponent';

@NgModule({
    declarations: [
      AppComponent,
      DynamicContainerComponent,
      DesignerComponent,
      DesingerAttributeComponent,
      InputComponent
    ],
    entryComponents:[
      DynamicContainerComponent,
      InputComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
export default class AppModule {
    


}


