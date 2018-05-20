import { Component, Input, ComponentFactoryResolver, ComponentFactory} from "@angular/core";
import AppDynamicComponent from "./AppDynamicComponent";

@Component({
    selector: "app-detail-component",
    template: `
        <div>Detail</div>
    `

})
export default class AppDetailComponent{
    
    constructor(private componentFactoryResolver: ComponentFactoryResolver){
        
        
    }


}



