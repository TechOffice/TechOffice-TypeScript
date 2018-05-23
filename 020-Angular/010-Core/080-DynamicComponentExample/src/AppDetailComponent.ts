import { Component, Input, ComponentFactoryResolver, ComponentFactory, ViewContainerRef} from "@angular/core";
import AppDynamicComponent from "./AppDynamicComponent";

@Component({
    selector: "app-detail-component",
    template: `
        <h2>Detail</h2>
    `

})
export default class AppDetailComponent{
    
    private appDynamicComponentComponentFactory: ComponentFactory<AppDynamicComponent>; 

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainer: ViewContainerRef){
        
            this.appDynamicComponentComponentFactory = 
                componentFactoryResolver.resolveComponentFactory(AppDynamicComponent);

            this.viewContainer.createComponent(this.appDynamicComponentComponentFactory);
    }



}



