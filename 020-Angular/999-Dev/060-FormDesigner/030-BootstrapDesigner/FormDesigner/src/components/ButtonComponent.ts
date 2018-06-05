import { Input } from '@angular/core';
import { Component } from '@angular/core';
import DynamicConfig from '../config/DynamicConfig';


@Component({
    selector: "button-component",
    template: `
        <button type="button" class="btn btn-primary">
            {{config.value}}
        </button>
    `
})
export default class ButtonComponent{
    
    @Input()
    private config: DynamicConfig;

}