import { Component, Input } from "@angular/core";

@Component({
    selector: "app-detail-component",
    template: `
        <h1>{{title}}</h1>
        <input type="text" [(ngModel)]="title"/>
        {{title}}
    `

})
export default class AppDetailComponent{
    
    @Input() title: string;

    call(){
        alert("call from child component");
    }
}



