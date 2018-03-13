import { Injectable } from "@angular/core";


@Injectable()
export class AppService{

    constructor(){}

    getName(): String{
        return "Hello World. This is App Service.";
    }
}