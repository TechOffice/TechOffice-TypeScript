import { Component, OnInit, ComponentRef, ViewChild } from "@angular/core";
import { ComponentType } from "./ComponentType";
import DynamicConfig from "./DynamicConfig";
import DynamicContainerComponent from "./DynamicContainerComponent";
import DesignerComponent from "./DesignerComponent";

@Component({
    selector: "app-component",
    template: `
        <h1>{{title}}</h1>
        <table>
            <tr>
                <td>
                    <designer-component
                        #designer 
                        [config]="config" >
                    </designer-component>
                </td>
                <td>
                    <div>
                        Control Panel
                    </div>
                    <div>
                        <button (click)="add($event)">Add</button>
                    </div>
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



