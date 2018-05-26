import { Component, Input, ComponentFactoryResolver, ComponentFactory, ViewContainerRef} from "@angular/core";
import DragDropContext from "./DragDropContext";

@Component({
    selector: "app-detail-component",
    template: `
        <div 
            style="border: 1px solid"
            draggable="true" 
            (dragstart)="dragstart($event)"
            (drop)="drop($event)"
            (dragover)="dragover($event)">
            Detail {{id}}
            <span>Testing</span>
        </div>
    `

})
export default class AppDetailComponent{
    
    @Input() id: string;

    constructor(private viewContainerRef: ViewContainerRef){
    }


}



