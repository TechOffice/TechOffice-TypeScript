import { ComponentRef } from '@angular/core';
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
                    <td></td>
                    <td>
                        <button (click)="delete($event)" *ngIf="config">Delete</button>
                        <button (click)="forward($event)" *ngIf="config">Forward</button>
                        <button (click)="backward($event)" *ngIf="config">Backward</button>
                    </td>
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
        if (this.component && this.component){
            this.config.getParent().getItems().splice(this.config.getParent().getItems().indexOf(this.config), 1);
            this.component.componentElementRef.nativeElement.remove()
        }
    }

    forward(event){
        if (this.component && this.component){
            var index = -1;
            let arr: ComponentRef<DynamicContainerComponent>[] = this.component.getParent().componentRefs;
            for (var i=0; i<arr.length; i++){
                let item: ComponentRef<DynamicContainerComponent> = arr[i];
                if (item.instance == this.component){
                    index = i;
                }
            }
            if (index > 1){
                var element = arr[index-1].instance.componentElementRef.nativeElement;
                var parent = element.parentNode
                parent.insertBefore(this.component.componentElementRef.nativeElement, element);
            }
        }
    }

    backward(event){

    }
}