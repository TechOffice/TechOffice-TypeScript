import { Component, OnInit } from "@angular/core";
import { ComponentType } from "./ComponentType";
import DynamicConfig from "./DynamicConfig";

@Component({
    selector: "app-component",
    template: `
        <h1>{{title}}</h1>
        <dynamic-container-component [dynamicConfig]="config"></dynamic-container-component>
        <div>{{config.toJson()}}</div>
    `
})
export default class AppComponent implements OnInit {
    
    private title = "Hello World";
    private config: DynamicConfig;

    constructor(){

        var configJson = {
            type: ComponentType.CONTAINER,
            items: [
                {
                    type: ComponentType.INPUT
                },
                {
                    type: ComponentType.CONTAINER,
                    items: [{
                        type: ComponentType.CONTAINER,
                        items: [{
                            type: ComponentType.CONTAINER,
                            items: [{
                                type: ComponentType.INPUT
                            }]
                        }]
                    }]
                }
            ]
        }

        this.config = new DynamicConfig();
        this.config.assign(configJson);
        console.log(this.config);
    }

    ngOnInit() {}


}



