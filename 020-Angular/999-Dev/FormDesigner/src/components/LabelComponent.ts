import { Input } from '@angular/core';
import { Component } from '@angular/core';
import DynamicConfig from '../DynamicConfig';


@Component({
    selector: "label-component",
    template: `
        <span>{{config.value}}</span>
    `
})
export default class LabelComponent{
    

    
}