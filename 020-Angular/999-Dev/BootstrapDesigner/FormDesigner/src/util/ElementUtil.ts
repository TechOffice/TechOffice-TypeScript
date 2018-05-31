import { ComponentRef } from '@angular/core';
import DynamicContainerComponent from "../designer/DynamicContainerComponent";
import ArrayUtil from './ArrayUtil';


export default class ElementUtil{

    private ElementUtil(){}

    public static isParentElement(parentElement: any, childElement: any): boolean{
        if (childElement.parentElement){
            if (childElement.parentElement == parentElement){
                return true;
            }else {
                return ElementUtil.isParentElement(parentElement, childElement.parentElement);
            }
        }
        return false;
    }

    public static move(component: DynamicContainerComponent, direction: number): void{
        var index = -1;
        let arr: ComponentRef<DynamicContainerComponent>[] = component.getParent().componentRefs;
        for (var i=0; i<arr.length; i++){
            let item: ComponentRef<DynamicContainerComponent> = arr[i];
            if (item.instance == component){
                index = i;
            }
        }
        if (index > 0){
            if (direction > 0 ){
                direction = direction + 1;
            }
            var parent = arr[index].instance.componentElementRef.nativeElement.parentNode;
            var element  = null;
            var elementItem = arr[index+direction];
            if (elementItem != null){
                var element = arr[index+direction].instance.componentElementRef.nativeElement;
            } 
            parent.insertBefore(component.componentElementRef.nativeElement, element);
        }

        let targetIndex = index + direction - 1;        
        let currentTarget = arr.splice(targetIndex, 1)[0];
        let targetElement = arr[targetIndex];

        ArrayUtil.addAfter(arr, currentTarget, targetElement)
        
    }

    
}