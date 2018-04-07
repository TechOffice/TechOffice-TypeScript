import { Component } from "@angular/core";

@Component({
    selector: "app-component",
    template: `
        <app-detail-component [title]="title" #child></app-detail-component>
        <button (click)="child.call()">Call Child Component Method<button>
    `
})
export default class AppComponent{
    title: string;

    constructor(){
        this.title = "Hello";
    }

  
}



