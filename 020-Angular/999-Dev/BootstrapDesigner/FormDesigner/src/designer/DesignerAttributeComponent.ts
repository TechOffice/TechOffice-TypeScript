import { ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import DynamicConfig from '../config/DynamicConfig';
import DesignerContext from '../context/DesignerContext';
import DynamicContainerComponent from './DynamicContainerComponent';



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
                    <td><input [(ngModel)]="config.value" *ngIf="config"/></td>
                </tr>
                <tr>
                    <td><button (click)="delete($event)">Delete</button></td>
                    <td></td>
                </tr>
            </table>
        </div>
    `
})
export default class DesignerAttributeComponent implements OnInit{

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

    delete(event){
        this.config.getParent().getItems().splice(this.config.getParent().getItems().indexOf(this.config), 1);
        this.component.componentElementRef.nativeElement.remove()
    }
}