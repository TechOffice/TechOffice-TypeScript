import { Component } from "@angular/core";

@Component({
    selector: "app-component",
    template: `
        <h1>{{title}}</h1>
        <form>
            <mat-form-field>
                <input matInput placeholder="Favorite food" value="Sushi">
            </mat-form-field>
        </form>
    `,
    styles: [

    ]    
    
})
export default class AppComponent{
    title = "Hello World";
    test  = "";
}



