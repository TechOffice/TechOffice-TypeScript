import { Component } from "@angular/core";

@Component({
    selector: "app-component",
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/test1">Test1</a>
            <a routerLink="/test2">Test2</a>
        </nav>
        <router-outlet></router-outlet>
    `
})
export default class AppComponent{
    title = "Hell World";
}



