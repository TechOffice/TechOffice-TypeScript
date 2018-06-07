import { Input } from '@angular/core';
import { Component } from '@angular/core';
import DynamicConfig from '../config/DynamicConfig';


@Component({
    selector: "label-component",
    template: `
        <label>{{config.value}}</label>
    `
})
export default class LabelComponent{
    
    @Input()
    private config: DynamicConfig;
    
}