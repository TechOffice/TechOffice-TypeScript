import { ColumnDefinition } from './ColumnDefinition';

export default class GridOption{

    columnDefinitions: ColumnDefinition[];

    constructor(){

    }

    getColumnDefinitions(){
        return this.columnDefinitions;    
    }

    setColumnDefinitions(columnDefinitions: ColumnDefinition[]){
        this.columnDefinitions = columnDefinitions;
    }

    
}