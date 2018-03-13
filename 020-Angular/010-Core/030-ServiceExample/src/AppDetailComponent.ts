import { AppService } from './AppService';
import { Component, Input } from "@angular/core";
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: "app-detail-component",
    template: "<h1>{{inputObject.name}}</h1><div>{{appServiceName}}</div>"
})
export default class AppDetailComponent implements OnInit{
    
    
    @Input() inputObject: any;
    appServiceName: String;

    constructor(private appService: AppService){
    }

    ngOnInit(){
        this.appServiceName = this.appService.getName();
    }

}



