import { Component } from "@angular/core";

@Component({
    selector: "app-component",
    template: `
        <h1>{{title}}</h1>
        <div>
            <input [(ngModel)]="test" required/>
            {{test}}
        </div>
    `,
    styles: ['.ng-invalid { border: 1px solid red; }']    
})
export default class AppComponent{
    title = "Hello World";
    test  = "";
}



