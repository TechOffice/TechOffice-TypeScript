import { Directive, ElementRef } from "@angular/core";



@Directive({
    selector: '[appDirecitve]'
})
export default class AppDirective{

    constructor(private elementRef: ElementRef){
        console.log(elementRef);
    }


}