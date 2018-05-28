import { Component, Input } from '@angular/core';
import DynamicConfig from '../config/DynamicConfig';
import DesignerComponent from './DesignerComponent';
import { ComponentType } from '../model/ComponentType';

@Component({
    selector: "designer-control-panel-element-component",
    template: `
        <button (click)="add($event)">{{type}}</button>
    `
})
export default class DesignerControlPanelElementComponent{

    @Input()
    config: DynamicConfig;

    @Input()
    designer: DesignerComponent;

    @Input()
    componentType: ComponentType;

    @Input()
    type: String;

    add(event){
        let dynamicConfig: DynamicConfig = new DynamicConfig();
        dynamicConfig.setType(this.componentType);
        this.config.getItems().push(dynamicConfig);
        dynamicConfig.setParent(this.config);
        this.designer.add(dynamicConfig);
    }
    
}