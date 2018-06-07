import { Component, Input } from '@angular/core';
import DynamicConfig from '../config/DynamicConfig';
import DesignerComponent from './DesignerComponent';
import { ComponentType } from '../model/ComponentType';
import DesignerContext from '../context/DesignerContext';

@Component({
    selector: "designer-control-panel-element-component",
    template: `
        <div>
            <button (click)="add($event)">{{type}}</button>
            <button (click)="addInSelect($event)">In Select</button>
        </div>
        <div>
            <button (click)="addWithRowInSelect($event)">Row</button>
            <button (click)="addWithColInSelect($event)">Col</button>
        </div>
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

    addInSelect(event){
        if (DesignerContext.getInstance().getComponent().isContainer){
            let dynamicConfig: DynamicConfig = new DynamicConfig();
            dynamicConfig.setType(this.componentType);
            dynamicConfig.setValue(this.value);
            this.config.getItems().push(dynamicConfig);
            dynamicConfig.setParent(DesignerContext.getInstance().getComponent().dynamicConfig);
            DesignerContext.getInstance().getComponent().add(dynamicConfig)
        }
    }

    addWithRowInSelect(event){
        if (DesignerContext.getInstance().getComponent().isContainer){
            let dynamicConfigContainer: DynamicConfig = new DynamicConfig();
            dynamicConfigContainer.setType(ComponentType.CONTAINER);
            dynamicConfigContainer.setValue('row')
            let dynamicConfig: DynamicConfig = new DynamicConfig();
            dynamicConfig.setType(this.componentType);
            dynamicConfig.setValue(this.value);
            dynamicConfigContainer.getItems().push(dynamicConfig);
            dynamicConfig.setParent(dynamicConfigContainer);
    
            this.config.getItems().push(dynamicConfigContainer);
            dynamicConfigContainer.setParent(DesignerContext.getInstance().getComponent().dynamicConfig);
            DesignerContext.getInstance().getComponent().add(dynamicConfigContainer)
        }
    }

    addWithColInSelect(event){
        if (DesignerContext.getInstance().getComponent().isContainer){
            let dynamicConfigContainer: DynamicConfig = new DynamicConfig();
            dynamicConfigContainer.setType(ComponentType.CONTAINER);
            dynamicConfigContainer.setValue('col')
            let dynamicConfig: DynamicConfig = new DynamicConfig();
            dynamicConfig.setType(this.componentType);
            dynamicConfig.setValue(this.value);
            dynamicConfigContainer.getItems().push(dynamicConfig);
            dynamicConfig.setParent(dynamicConfigContainer);
    
            this.config.getItems().push(dynamicConfigContainer);
            dynamicConfigContainer.setParent(DesignerContext.getInstance().getComponent().dynamicConfig);
            DesignerContext.getInstance().getComponent().add(dynamicConfigContainer)
        }
    }
}