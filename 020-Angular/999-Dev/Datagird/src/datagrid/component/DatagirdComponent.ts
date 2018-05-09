import { Component, Input } from "@angular/core";
import { ColumnDefinition } from "../model/ColumnDefinition";
import GridOption from "../model/GridOption";



@Component({
    selector: 'dategrid',
    template: `
        <table>
            <tr>
                <ng-container *ngFor="let columnDefinition of gridOption.getColumnDefinitions()">
                    <td>{{columnDefinition.label}}</td>
                </ng-container>
            </tr>
        </table>
    `
})
export class DatagridComponent{
 
    @Input()
    gridOption: GridOption;

    constructor(){

    }


}