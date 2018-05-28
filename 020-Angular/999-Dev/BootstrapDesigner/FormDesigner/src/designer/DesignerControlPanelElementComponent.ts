import { Component, Input } from '@angular/core';
import DynamicConfig from '../config/DynamicConfig';
import DesignerComponent from './DesignerComponent';
import { ComponentType } from '../model/ComponentType';

@Component({
    selector: "designer-control-panel-element-component",
    template: `
        <button (click)="add($event)">{{type}}</button>
        <button (click)="addWithRow($event)">Row</button>
        <button (click)="addWithCol($event)">Col</button>
        <button (click)="addWithSelect($event)">Select</button>
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

    @Input()
    value: any;

    
    add(event){
        let dynamicConfig: DynamicConfig = new DynamicConfig();
        dynamicConfig.setType(this.componentType);
        dynamicConfig.setValue(this.value);
        this.config.getItems().push(dynamicConfig);
        dynamicConfig.setParent(this.config);
        this.designer.add(dynamicConfig);
    }

    addWithRow(event){
        let dynamicConfigContainer: DynamicConfig = new DynamicConfig();
        dynamicConfigContainer.setType(ComponentType.CONTAINER);
        dynamicConfigContainer.setValue('row')
        let dynamicConfig: DynamicConfig = new DynamicConfig();
        dynamicConfig.setType(this.componentType);
        dynamicConfig.setValue(this.value);
        dynamicConfigContainer.getItems().push(dynamicConfig);

        this.config.getItems().push(dynamicConfigContainer);
        dynamicConfigContainer.setParent(this.config);
        this.designer.add(dynamicConfigContainer);
    }
    
    addWithCol(event){
        let dynamicConfigContainer: DynamicConfig = new DynamicConfig();
        dynamicConfigContainer.setType(ComponentType.CONTAINER);
        dynamicConfigContainer.setValue('col')
        let dynamicConfig: DynamicConfig = new DynamicConfig();
        dynamicConfig.setType(this.componentType);
        dynamicConfig.setValue(this.value);
        dynamicConfigContainer.getItems().push(dynamicConfig);

        this.config.getItems().push(dynamicConfigContainer);
        dynamicConfigContainer.setParent(this.config);
        this.designer.add(dynamicConfigContainer);
    }

    addWithSelect(event){
        
    }
}