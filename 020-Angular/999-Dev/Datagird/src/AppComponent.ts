import { ColumnDefinition } from './datagrid/model/ColumnDefinition';
import { Component } from "@angular/core";
import GridOption from "./datagrid/model/GridOption";

@Component({
    selector: "app-component",
    template: `
        <h1>{{title}}</h1>
        <datagrid [gridOption]="gridOption"></datagrid>
    `
})
export default class AppComponent{
    title = "Hello World";

    gridOption: GridOption;

    constructor(){
        this.gridOption = new GridOption();
        let columnDefinitions :ColumnDefinition[] = [];
        let columnDefinition: ColumnDefinition = new ColumnDefinition("name");
        columnDefinitions.push(columnDefinition);
        this.gridOption.setColumnDefinitions(columnDefinitions);
    }
}



