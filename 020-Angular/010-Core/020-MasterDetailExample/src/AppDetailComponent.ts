import { Component, Input } from "@angular/core";

@Component({
    selector: "app-detail-component",
    template: "<h1>{{inputObject.name}}</h1>"
})
export default class AppDetailComponent{
    
    @Input() inputObject: any;


}



