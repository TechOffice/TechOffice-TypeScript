import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import AppComponent from './AppComponent';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
      AppComponent
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


