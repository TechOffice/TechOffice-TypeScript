import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-component",
    template: `
        <h1>{{title}}</h1>
        <app-detail-component dynamic-field></app-detail-component>
    `
})
export default class AppComponent implements OnInit {
    
    private title = "Hello World";

    constructor(){

    }

    ngOnInit() {}


}



