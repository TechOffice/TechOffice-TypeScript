import { Input } from '@angular/core';
import { ComponentFactoryResolver, ComponentRef, Renderer2, ViewContainerRef, ElementRef, ComponentFactory } from '@angular/core';
import InputComponent from '../components/InputComponent';
import DynamicConfig from '../config/DynamicConfig';
import { ComponentType } from '../model/ComponentType';
import LabelComponent from '../components/LabelComponent';
import ButtonComponent from '../components/ButtonComponent';

export default class ComponentFactoryService{
    
    private ComponentFactory(){}

    public static  createComponent(
        componentFactoryResolver: ComponentFactoryResolver,
        viewContainer: ViewContainerRef,
        render: Renderer2,
        elementRef: ElementRef,
        config: DynamicConfig
    ): ComponentRef<any>{

        let componetFactory: ComponentFactory<any>;
        if (config.getType() == ComponentType.INPUT){
            componetFactory = componentFactoryResolver.resolveComponentFactory(InputComponent);
        }else if (config.getType() == ComponentType.LABEL) {
            componetFactory = componentFactoryResolver.resolveComponentFactory(LabelComponent);
        }else if (config.getType() == ComponentType.BUTTON){
            componetFactory = componentFactoryResolver.resolveComponentFactory(ButtonComponent);
        }
        let componentRef:   ComponentRef<any> = viewContainer.createComponent(componetFactory);
        componentRef.instance.config = config;
        render.appendChild(elementRef.nativeElement, componentRef.location.nativeElement);
        return componentRef;
    }
}