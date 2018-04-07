import { Component } from "@angular/core";

@Component({
    selector: "app-component",
    template: `
        <app-detail-component 
            [title]="title" 
            (outputStr)="onUpdateOutputStr($event)">
        </app-detail-component>
    `
})
export default class AppComponent{
    title: string;

    constructor(){
        this.title = "Hello";
    }

    onUpdateOutputStr(str: string){
        alert(str);
    }

  
}



