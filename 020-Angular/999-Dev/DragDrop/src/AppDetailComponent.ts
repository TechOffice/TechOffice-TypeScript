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
        </div>
    `

})
export default class AppDetailComponent{
    
    @Input() id: string;

    constructor(){
    }

    dragstart(event){
        console.log(this.id + ": start to drag");
        DragDropContext.getInstance().setId(this.id);
    }

    drop(event){
        let id: String = DragDropContext.getInstance().getId();
        console.log(id+ ": dropped");
    }

    dragover(event){
        event.preventDefault();
    }
}



