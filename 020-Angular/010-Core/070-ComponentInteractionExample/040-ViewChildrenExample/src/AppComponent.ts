import { Component, QueryList, ViewChildren } from "@angular/core";
import AppDetailComponent from "./AppDetailComponent";

@Component({
    selector: "app-component",
    template: `
        <div>
            <app-detail-component [title]="title"></app-detail-component>
            <app-detail-component [title]="title"></app-detail-component>
            <app-detail-component [title]="title"></app-detail-component>
        </div>
        <div>
            <button (click)="onClick($event)">Update title of second app detail component</button>
        </div>
    `
})
export default class AppComponent{
    
    title: string;

    @ViewChildren(AppDetailComponent)
    appDetailComponents: QueryList<AppDetailComponent>;

    constructor(){
        this.title = "Hello";
    }

    onClick(event){
        let appDetailComponent: AppDetailComponent  = this.appDetailComponents.find(
            function(item: AppDetailComponent, index: number, array: AppDetailComponent[]){
                if (index == 2){
                    return true;
                }
                return false
            }
        );
        appDetailComponent.title = "updated "
    }

  
}



