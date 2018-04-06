import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-component",
    template: `
        <h1>{{title}}</h1>
        <button (click)="onClick()">click</button>
    `
})
export default class AppComponent{
    title = "Hello World";

    constructor(private httpClient: HttpClient){

    }

    onClick(){
        var request = this.httpClient.get("assets/testdata.json");
        request.subscribe(function(data){
            alert(JSON.stringify(data));
        })
    }
}



