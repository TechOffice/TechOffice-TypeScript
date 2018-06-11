import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core/src/change_detection/pipe_transform";



@Pipe({name:'appPipe'})
export default class AppPipe implements PipeTransform{
    
    transform(value: any) {
        return "parsed to abc";
    }

}