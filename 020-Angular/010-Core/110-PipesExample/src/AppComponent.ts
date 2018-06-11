import { Component } from "@angular/core";

@Component({
    selector: "app-component",
    template: "<h1>{{title | appPipe}}</h1>"
})
export default class AppComponent{
    title = "Hello World";
}



