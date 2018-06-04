import { Component, Input } from "@angular/core";
import AppService from "./AppService";

@Component({
    selector: "app-detail-component",
    template: `
        <div>
            <h1>{{title}}</h1>
            <input type="text" [(ngModel)]="title"/>
            {{title}}
            <button (click)="onClick($event)">Click</button>
        </div>
    `

})
export default class AppDetailComponent{
    
    @Input() title: string;
    
    constructor(private appService: AppService){
        appService.subscribe(this.call);
    }

    call(message){
        console.log(message);
    }

    onClick(event){
        this.appService.announce(this.title);
    }
}



