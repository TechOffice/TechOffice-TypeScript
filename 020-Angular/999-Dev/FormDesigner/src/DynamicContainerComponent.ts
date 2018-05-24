import { ComponentFactory, ComponentRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { ComponentType } from './ComponentType';
import InputComponent from './components/InputComponent';
import DynamicConfig from './DynamicConfig';

@Component({
    selector: "dynamic-container-component",
    template: `
        <div dragDrop>
            Testing
        </div>
    `
})
export default class DynamicContainerComponent implements OnInit{

    @Input()
    dynamicConfig: DynamicConfig;
    
    private isContainer: boolean;
    private componentRef: ComponentRef<any>;
    private componentRefs: ComponentRef<any>[] = [];
    
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainer: ViewContainerRef
    ){}

    ngOnInit(){
        if (this.dynamicConfig){
            if (this.dynamicConfig.getType() == ComponentType.INPUT){
                this.isContainer = false;
                let componetFactory: ComponentFactory<InputComponent> = 
                    this.componentFactoryResolver.resolveComponentFactory(InputComponent);
                this.componentRef = this.viewContainer.createComponent(componetFactory);
            }else {
                this.isContainer = true;
                let items: DynamicConfig[] = this.dynamicConfig.getItems();
                if (items){
                    for (var i=0; i<items.length; i++){
                        let item: DynamicConfig = items[i];
                        if (item.getType() == ComponentType.INPUT){
                            let componetFactory: ComponentFactory<InputComponent> = 
                                this.componentFactoryResolver.resolveComponentFactory(InputComponent);
                            let componentRef: ComponentRef<InputComponent> = this.viewContainer.createComponent(componetFactory);
                            this.componentRefs.push(componentRef);
                        }else if (item.getType() == ComponentType.CONTAINER){
                            let componetFactory: ComponentFactory<DynamicContainerComponent> = 
                                this.componentFactoryResolver.resolveComponentFactory(DynamicContainerComponent);
                            let componentRef: ComponentRef<DynamicContainerComponent> = this.viewContainer.createComponent(componetFactory);
                            componentRef.instance.dynamicConfig = item;
                            this.componentRefs.push(componentRef);
                        }
                    }
                }
            }
        }else {
            console.log("config does not exist");
        }

    }


}