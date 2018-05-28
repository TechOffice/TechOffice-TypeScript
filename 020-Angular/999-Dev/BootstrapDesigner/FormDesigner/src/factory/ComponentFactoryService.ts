import { ComponentFactoryResolver, ComponentRef, Renderer2, ViewContainerRef, ElementRef, ComponentFactory } from '@angular/core';
import InputComponent from '../components/InputComponent';

export default class ComponentFactoryService{
    
    private ComponentFactory(){}

    public static  createComponent(
        componentFactoryResolver: ComponentFactoryResolver,
        viewContainer: ViewContainerRef,
        render: Renderer2,
        elementRef: ElementRef
    ): ComponentRef<any>{
        let componetFactory: ComponentFactory<InputComponent> = 
        componentFactoryResolver.resolveComponentFactory(InputComponent);
        let componentRef:   ComponentRef<any> = viewContainer.createComponent(componetFactory);
        render.appendChild(elementRef.nativeElement, componentRef.location.nativeElement);
        return componentRef;
    }
}