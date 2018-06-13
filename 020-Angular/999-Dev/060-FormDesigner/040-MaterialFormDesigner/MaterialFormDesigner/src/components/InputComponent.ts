import { Input } from '@angular/core';
import { Component } from '@angular/core';
import DynamicConfig from '../config/DynamicConfig';


@Component({
    selector: "input-component",
    template: `
        <mat-form-field>
            <input type="text" matInput [placeholder]="config.value"/>
        </mat-form-field>
    `
})
export default class InputComponent{
    
    @Input()
    private config: DynamicConfig;

}