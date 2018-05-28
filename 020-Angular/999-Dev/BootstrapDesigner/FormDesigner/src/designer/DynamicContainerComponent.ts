import { ComponentType } from './../model/ComponentType';
import { ComponentFactory, ComponentRef, ElementRef, ViewChild, Injector, Renderer2 } from '@angular/core';
import { OnInit } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import DynamicConfig from '../config/DynamicConfig';
import ComponentFactoryService from '../factory/ComponentFactoryService';
import DrapDropContext from '../context/DragDropContext';
import ElementUtil from '../util/ElementUtil';
import DesignerContext from '../context/DesignerContext';


@Component({
    selector: "dynamic-container-component",
    template: `
        <div #container
            draggable="true"
            (dragstart)="dragstart($event)"
            (drop)="drop($event)"
            (dragover)="dragover($event)"
            (click)="click($event)"
            style="border: 1px solid; min-height: 5px; margin: 5px 5px 5px 5px"></div>
    `
})
export default class DynamicContainerComponent {

    @Input()
    dynamicConfig: DynamicConfig;

    @ViewChild("container", {read: ElementRef})
    private elementRef: ElementRef;

    private isContainer: boolean;
    componentRef: ComponentRef<any>;
    componentRefs: ComponentRef<any>[] = [];
    
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector,
        private viewContainer: ViewContainerRef,
        private render: Renderer2
    ){
        console.log("running");
    }

    ngOnInit(){
        if (this.dynamicConfig){
            console.log(this.dynamicConfig)
            if (this.dynamicConfig.getType() == ComponentType.INPUT){
                this.isContainer = false;
                this.componentRef = ComponentFactoryService.createComponent(this.componentFactoryResolver, this.viewContainer, this.render, this.elementRef);
            }else {
                this.isContainer = true;
                let items: DynamicConfig[] = this.dynamicConfig.getItems();
                if (items){
                    for (var i=0; i<items.length; i++){
                        let item: DynamicConfig = items[i];
                        let componetFactory: ComponentFactory<DynamicContainerComponent> = 
                            this.componentFactoryResolver.resolveComponentFactory(DynamicContainerComponent);
                        let componentRef: ComponentRef<DynamicContainerComponent> = 
                            this.viewContainer.createComponent(componetFactory);
                        componentRef.instance.dynamicConfig = item;
                        this.componentRefs.push(componentRef);
                        this.render.appendChild(this.elementRef.nativeElement, componentRef.location.nativeElement);
                    }
                }
            }
        }else {
            console.log("config does not exist");
        }
    }

    add(config: DynamicConfig){
        if (this.isContainer){
            let componetFactory: ComponentFactory<DynamicContainerComponent> = 
            this.componentFactoryResolver.resolveComponentFactory(DynamicContainerComponent);
            let componentRef: ComponentRef<DynamicContainerComponent> = this.viewContainer.createComponent(componetFactory);
            componentRef.instance.dynamicConfig = config;
            this.render.appendChild(this.elementRef.nativeElement, componentRef.location.nativeElement);
            this.componentRefs.push(componentRef);    
        }
    }

    dragstart(event){
        DrapDropContext.getInstance().setComponent(this);
        event.stopPropagation();
    }

    drop(event){
        if(this.isContainer){
            let component : DynamicContainerComponent 
                = DrapDropContext.getInstance().getComponent();
            if (!ElementUtil.isParentElement(component.elementRef.nativeElement, 
                    this.elementRef.nativeElement)){
                this.render.appendChild(this.elementRef.nativeElement, component.elementRef.nativeElement);
                this.dynamicConfig.getItems().push(component.dynamicConfig);
                var index = component.dynamicConfig.getParent().getItems().indexOf(component.dynamicConfig);
                component.dynamicConfig.getParent().getItems().splice(index, 1);
                component.dynamicConfig.setParent(this.dynamicConfig);
            }
            event.stopPropagation();
        }
    }

    dragover(event){
        event.preventDefault();
    }

    click(event){
        DesignerContext.getInstance().setComponent(this);
        event.stopPropagation();
    }

}