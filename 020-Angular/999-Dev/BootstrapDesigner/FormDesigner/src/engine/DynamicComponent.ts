import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import DynamicConfig from '../config/DynamicConfig';

@Component({
    selector: "dynamic-component",
    template: `
        <div #container
            [ngClass]="{
                'col':isContainer && dynamicConfig.value == 'col', 
                'row': isContainer && dynamicConfig.value == 'row',
                'form-group': !isContainer
            }">
        </div>
    `
})
export default class DynamicComponent{

    @Input()
    dynamicConfig: DynamicConfig;

    isContainer: boolean;

    @ViewChild("container", {read: ElementRef})
    elementRef: ElementRef;
    
}