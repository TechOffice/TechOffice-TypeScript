import { Input } from '@angular/core';
import { Component } from '@angular/core';
import DynamicConfig from '../config/DynamicConfig';

@Component({
    selector: "table-component",
    template: `
        <table class="table">
            <thead>
                <tr>
                    <td scope="col">Column 1</td>
                    <td scope="col">Column 2</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Value 1</td>
                    <td>Value 2</td>
                </tr>
                <tr>
                    <td>Value 1</td>
                    <td>Value 2</td>
                </tr>
                <tr>
                    <td>Value 1</td>
                    <td>Value 2</td>
                </tr>
            </tbody>
        </table>
    `
})
export default class TableComponent{

    @Input()
    private config: DynamicConfig;
        
}