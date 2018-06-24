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
            style="border: 1px solid; min-height: 10px; min-width: 10px; margin: 10px;"
            [ngClass]="{
                'col':isContainer && dynamicConfig.value == 'col', 
                'row': isContainer && dynamicConfig.value == 'row',
                'form-group': !isContainer
            }"
            [ngStyle]="{
                'background-color': isSelected? 'yellow': 'white'
            }">
            </div>
    `
})
export default class DynamicContainerComponent {

    @Input()
    dynamicConfig: DynamicConfig;

    isContainer: boolean;
    isSelected: boolean = false;

    @ViewChild("container", {read: ElementRef})
    elementRef: ElementRef;

    componentRef: ComponentRef<any>;
    componentRefs: ComponentRef<DynamicContainerComponent>[] = [];
    parent: DynamicContainerComponent;
    
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector,
        public viewContainer: ViewContainerRef,
        private render: Renderer2,
        public componentElementRef: ElementRef
    ){
        console.log("running");
    }

    ngOnInit(){
        if (this.dynamicConfig){
            console.log(this.dynamicConfig)
            if (this.dynamicConfig.getType() == ComponentType.CONTAINER){
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
                        componentRef.instance.setParent(this);
                    }
                }
            }else {
                this.isContainer = false;
                this.componentRef = ComponentFactoryService.createComponent(this.componentFactoryResolver, this.viewContainer, this.render, this.elementRef, this.dynamicConfig);
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
            componentRef.instance.setParent(this);
            this.render.appendChild(this.elementRef.nativeElement, componentRef.location.nativeElement);
            this.componentRefs.push(componentRef);    
        }
    }

    dragstart(event: DragEvent){
        DrapDropContext.getInstance().setComponent(this);
        event.dataTransfer.setData("dynamic_component", "true");
        event.stopPropagation();
    }

    drop(event: DragEvent){
        if(this.isContainer){
            let component : DynamicContainerComponent 
                = DrapDropContext.getInstance().getComponent();
            if (!ElementUtil.isParentElement(component.elementRef.nativeElement, 
                    this.elementRef.nativeElement)){
                
                // layout
                this.render.appendChild(this.elementRef.nativeElement, component.elementRef.nativeElement);
                
                // config
                this.dynamicConfig.getItems().push(component.dynamicConfig);
                var configIndex = component.dynamicConfig.getParent().getItems().indexOf(component.dynamicConfig);
                component.dynamicConfig.getParent().getItems().splice(configIndex, 1);
                component.dynamicConfig.setParent(this.dynamicConfig);

                // component
                component.setParent(this);
            }
            event.stopPropagation();
        }
    }

    dragover(event: DragEvent){
        event.preventDefault();
    }

    click(event: MouseEvent){
        DesignerContext.getInstance().setComponent(this);
        this.isSelected = true;
        event.stopPropagation();
    }

    unselect(){
        this.isSelected = false;
    }

    setParent(parent: DynamicContainerComponent): void{
        this.parent = parent;
    }

    getParent(): DynamicContainerComponent{
        return this.parent;
    }

}