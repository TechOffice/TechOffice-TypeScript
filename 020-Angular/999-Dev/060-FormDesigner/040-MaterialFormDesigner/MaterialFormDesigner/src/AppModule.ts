import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppComponent from './AppComponent';
import InputComponent from './components/InputComponent';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import DesignerComponent from './designer/DesignerComponent';
import DesingerAttributeComponent from './designer/DesignerAttributeComponent';
import DynamicContainerComponent from './designer/DynamicContainerComponent';
import DesignerAttributeComponent from './designer/DesignerAttributeComponent';
import DesignerControlPanelComponent from './designer/DesignerControlPanelComponent';
import DesignerControlPanelElementComponent from './designer/DesignerControlPanelElementComponent';
import LabelComponent from './components/LabelComponent';
import ButtonComponent from './components/ButtonComponent';
import TableComponent from './components/TableComponent';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
    declarations: [
      AppComponent,
      DynamicContainerComponent,
      DesignerComponent,
      DesignerAttributeComponent,
      DesignerControlPanelComponent,
      DesignerControlPanelElementComponent,
      InputComponent,
      LabelComponent,
      ButtonComponent,
      TableComponent,
      MatButtonModule
    ],
    entryComponents:[
      DynamicContainerComponent,
      InputComponent,
      LabelComponent,
      ButtonComponent,
      TableComponent
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


