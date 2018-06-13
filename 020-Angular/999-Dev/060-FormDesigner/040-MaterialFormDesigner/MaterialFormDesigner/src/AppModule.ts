import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppComponent from './AppComponent';
import InputComponent from './components/InputComponent';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import DesignerComponent from './designer/DesignerComponent';
import DynamicContainerComponent from './designer/DynamicContainerComponent';
import DesignerAttributeComponent from './designer/DesignerAttributeComponent';
import DesignerControlPanelComponent from './designer/DesignerControlPanelComponent';
import DesignerControlPanelElementComponent from './designer/DesignerControlPanelElementComponent';
import LabelComponent from './components/LabelComponent';
import ButtonComponent from './components/ButtonComponent';
import TableComponent from './components/TableComponent';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';

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
      TableComponent
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
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
export default class AppModule {
    
}


