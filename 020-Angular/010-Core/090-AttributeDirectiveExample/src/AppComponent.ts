import { Component } from "@angular/core";

@Component({
    selector: "app-component",
    template: `
        <h1>{{title}}</h1>
        <div appDirecitve>Testing</div>
    `
})
export default class AppComponent{
    title = "Hello World";
}



