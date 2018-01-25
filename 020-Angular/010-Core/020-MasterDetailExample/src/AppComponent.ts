import { Component } from "@angular/core";

@Component({
    selector: "app-component",
    template: '<app-detail-component [inputObject]="obj"></app-detail-component>'
})
export default class AppComponent{
    obj = {
        name: "Test"
    }
}



