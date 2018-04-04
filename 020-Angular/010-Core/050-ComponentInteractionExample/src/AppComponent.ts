import { Component } from "@angular/core";

@Component({
    selector: "app-component",
    template: `
        <app-detail-component [title]="title"></app-detail-component>
    `
})
export default class AppComponent{
    title: string;

    constructor(){
        this.title = "Hello";
    }

  
}



