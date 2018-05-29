import { ComponentType } from './../model/ComponentType';
import { Component, Input } from '@angular/core';
import DynamicConfig from '../config/DynamicConfig';
import DesignerComponent from './DesignerComponent';

@Component({
    selector: "designer-control-panel-component",
    template: `
        <div>
            Control Panel
        </div>
        <div>
            <designer-control-panel-element-component
                [componentType]="'0'"
                [type]="'Row'"
                [config]="config"
                [designer]="designer"
                [value]="'row'">
            </designer-control-panel-element-component>
        </div>
        <div>
            <designer-control-panel-element-component
                [componentType]="'0'"
                [type]="'Col'"
                [config]="config"
                [designer]="designer"
                [value]="'col'">
            </designer-control-panel-element-component>
        </div>
        <div>
            <designer-control-panel-element-component
                [componentType]="'1'"
                [type]="'Input'"
                [config]="config"
                [designer]="designer">
            </designer-control-panel-element-component>
        </div>
        <div>
            <designer-control-panel-element-component
                [componentType]="'2'"
                [type]="'Label'"
                [config]="config"
                [designer]="designer"
                [value]="'new label'">
            </designer-control-panel-element-component>
        </div>
        <div>
            <designer-control-panel-element-component
                [componentType]="'3'"
                [type]="'Button'"
                [config]="config"
                [designer]="designer"
                [value]="'New Button'">
            </designer-control-panel-element-component>
        </div>
        <div>
            <designer-control-panel-element-component
                [componentType]="'4'"
                [type]="'Table'"
                [config]="config"
                [designer]="designer"
                [value]="'New Table'">
            </designer-control-panel-element-component>
        </div>
    `
})
export default class DesignerControlPanelComponent{

    @Input()
    config: DynamicConfig;

    @Input()
    designer: DesignerComponent;

}