import { Input } from '@angular/core';
import { Component } from '@angular/core';
import DynamicConfig from '../config/DynamicConfig';


@Component({
    selector: "input-component",
    template: `<input class="form-control" disabled/>`
})
export default class InputComponent{
    
    @Input()
    private config: DynamicConfig;

}