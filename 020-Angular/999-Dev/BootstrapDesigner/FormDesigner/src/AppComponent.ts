import { ComponentType } from './model/ComponentType';
import { Component, OnInit, ComponentRef, ViewChild } from "@angular/core";

import DynamicConfig from "./config/DynamicConfig";
import DesignerComponent from "./designer/DesignerComponent";

@Component({
    selector: "app-component",
    template: `
        <h1>{{title}}</h1>
        <table>
            <tr>
                <td>
                    <div>
                        Control Panel
                    </div>
                    <div>
                        <button (click)="add($event)">Add</button>
                    </div>
                </td>
                <td>
                    <designer-component
                        #designer 
                        [config]="config" >
                    </designer-component>
                </td>
                <td>   
                    <designer-attribute-component>
                    </designer-attribute-component>
                </td>
            </tr>
        </table>
        <div>{{config.toJson()}}</div>
    `
})
export default class AppComponent implements OnInit {
    
    private title = "Hello World";
    private config: DynamicConfig;

    @ViewChild("designer")
    private designer: DesignerComponent;

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

    add(event){
        let dynamicConfig: DynamicConfig = new DynamicConfig();
        dynamicConfig.setType(ComponentType.INPUT);
        this.config.getItems().push(dynamicConfig);
        dynamicConfig.setParent(this.config);
        this.designer.add(dynamicConfig);
        // console.log(this.designer.componentRef.changeDetectorRef.detectChanges());
        // console.log(this.designer.config);
    }
}



