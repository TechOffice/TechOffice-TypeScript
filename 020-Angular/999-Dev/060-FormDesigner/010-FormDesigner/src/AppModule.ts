import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppComponent from './AppComponent';
import AppDetailComponent from './AppDetailComponent';
import DynamicContainerComponent from './DynamicContainerComponent';
import DragDropDirective from './DragDropDirective';
import InputComponent from './components/InputComponent';
import DesignerComponent from './DesignerComponent';
import DesingerAttributeComponent from './DesignerAttributeComponent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
      AppComponent,
      AppDetailComponent,
      DynamicContainerComponent,
      DesignerComponent,
      DesingerAttributeComponent,
      DragDropDirective,
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

