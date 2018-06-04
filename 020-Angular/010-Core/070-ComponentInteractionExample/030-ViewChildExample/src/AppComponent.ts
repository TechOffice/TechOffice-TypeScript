import { Component, ViewChild } from "@angular/core";
import AppDetailComponent from "./AppDetailComponent";

@Component({
    selector: "app-component",
    template: `
        <app-detail-component [title]="title" #child></app-detail-component>
        <hr/>
        <div>
            {{child.title}}
            <button (click)="child.call()">Call Child Component Method, call() (Method 1)</button>
            <button (click)="callChildMethod()">Call Child Component Method, call() (Method 2)</button>
        </div>
    `
})
export default class AppComponent{

    title: string;

    // this is not necessary to declare if this is required to call in controller 
    @ViewChild('child') child: AppDetailComponent;
    
    constructor(){
        this.title = "Hello";
    }

    callChildMethod(){
        this.child.call()
    }

}



