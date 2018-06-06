import { Component } from "@angular/core";

@Component({
    selector: "app-component",
    template: `
        <h1>{{title}}</h1>
        <app-detail-component *ngIf="show"></app-detail-component>
        <button (click)="onClick($event)">Toggle Detail Component</button>
    `
})
export default class AppComponent{
    
    title = "Hello World";
    show = true;
    
    onClick(event){
        this.show = !this.show;
    }
    
}