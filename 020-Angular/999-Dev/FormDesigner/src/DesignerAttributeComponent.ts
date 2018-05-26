import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import DynamicConfig from './DynamicConfig';
import DynamicContainerComponent from './DynamicContainerComponent';
import DesignerContext from './DesignerContext';
import { ComponentType } from './ComponentType';


@Component({
    selector: "designer-attribute-component",
    template: `
        <div>
            <table>
                <tr>
                    <td>Type</td>
                    <td>{{config?config.type:''}}</td>
                </tr>
                <tr>
                    <td>Label</td>
                    <input [(ngModel)]="config.value" *ngIf="config"/>
                </tr>
            </table>
        </div>
    `
})
export default class DesingerAttributeComponent implements OnInit{

    private component: DynamicContainerComponent;
    private config: DynamicConfig;

    ngOnInit(){
        DesignerContext.getInstance().setAttributeComponent(this);
        this.component = DesignerContext.getInstance().getComponent();
        if(this.component){
            this.config = this.component.dynamicConfig;
        }
    }

    updateSelectedComponent(component: DynamicContainerComponent){
        this.component = component;
        if(this.component){
            this.config = this.component.dynamicConfig;
        }
    }
}