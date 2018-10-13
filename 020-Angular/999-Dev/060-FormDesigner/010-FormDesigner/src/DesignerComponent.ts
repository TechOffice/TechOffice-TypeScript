import { Component, Input, OnInit, ComponentFactoryResolver, ComponentFactory, ComponentRef, ViewContainerRef, Renderer2, ElementRef, ViewChild } from "@angular/core";
import DynamicConfig from "./DynamicConfig";
import DynamicContainerComponent from "./DynamicContainerComponent";



@Component({
    selector: "designer-component",
    template: `
        <dynamic-container-component
            #container 
            [dynamicConfig]="config">
        </dynamic-container-component>
    `
})
export default class DesignerComponent implements OnInit{

    @Input()
    config: DynamicConfig;
    
    @ViewChild("container")
    container: DynamicContainerComponent;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainer: ViewContainerRef,
        private render: Renderer2,
        private elementRef: ElementRef
    ){}

    ngOnInit(){

    }

    add(config: DynamicConfig){
        this.container.add(config);
    }

}