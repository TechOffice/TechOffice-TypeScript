import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-detail-component",
    template: `
        <h1>{{title}}</h1>
        <input type="text" [(ngModel)]="title"/>
        <button (click)="emitOutput()">Update<button>
    `

})
export default class AppDetailComponent{
    
    @Input() title: string;
    @Output() outputStr: EventEmitter<String> = new EventEmitter<String>();

    emitOutput(){
        this.outputStr.emit("testing");
    }
}



