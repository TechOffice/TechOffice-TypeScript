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
                    <designer-control-panel-component
                        [config]="config"
                        [designer]="designer">
                    </designer-control-panel-component>
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
        <div>{{config.toXml()}}</div>
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
            value: '',
            items: [
                {
                    type: ComponentType.CONTAINER,
                    value: 'row',
                    items:[
                        {
                            type: ComponentType.CONTAINER,
                            value: 'col',
                            items: [
                                {
                                    type: ComponentType.INPUT
                                }
                            ]
                        },{
                            type: ComponentType.CONTAINER,
                            value: 'col',
                            items: [
                                {
                                    type: ComponentType.INPUT
                                }
                            ]
                        },{
                            type: ComponentType.CONTAINER,
                            value: 'col',
                            items: [
                                {
                                    type: ComponentType.LABEL,
                                    value: '123'
                                }
                            ]   
                        }
                    ]
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
    }
}



