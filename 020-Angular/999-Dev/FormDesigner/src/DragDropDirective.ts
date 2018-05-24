import { Directive, HostListener, ElementRef, Renderer2, OnInit, ViewContainerRef } from "@angular/core";
import DynamicContainerComponent from "./DynamicContainerComponent";




@Directive({
    selector: "[dragDrop]"
})
export default class DragDropDirective implements OnInit{

    constructor(
        private dynamicContainerComponent: DynamicContainerComponent,
        private renderer: Renderer2, 
        private elementRef: ElementRef,
        private viewContainer: ViewContainerRef){
    }

    ngOnInit(){
        this.renderer.setAttribute(this.elementRef.nativeElement, "draggable", "true");
    }
    
    @HostListener("dragstart")
    dragstart(event){
        debugger;
    }

    @HostListener("drop")
    drop(event){
        debugger;
    }

    @HostListener("dragover")
    dragover(event){
        debugger;
        event.preventDefault();
    }

}