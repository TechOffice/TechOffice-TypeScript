import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import DynamicConfig from './DynamicConfig';
import DynamicContainerComponent from './DynamicContainerComponent';
import DesignerContext from './DesignerContext';


@Component({
    selector: "designer-attribute-component",
    template: `
        <div>
            <table>
                <tr>
                    <td>Type</td>
                    <td>{{component?component.dynamicConfig.toJson():''}}</td>
                </tr>
                <tr>
                    <td>Label</td>
                </tr>
            </table>
        </div>
    `
})
export default class DesingerAttributeComponent implements OnInit{

    private component: DynamicContainerComponent;

    ngOnInit(){
        this.component = DesignerContext.getInstance().getComponent();
        DesignerContext.getInstance().setAttributeComponent(this);
    }

    updateSelectedComponent(component: DynamicContainerComponent){
        this.component = component;
    }
}