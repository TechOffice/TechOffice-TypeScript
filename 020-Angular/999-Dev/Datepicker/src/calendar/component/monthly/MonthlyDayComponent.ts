import { CalendarDate } from './../../model/CalendarDate';
import { Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "monthly-day",
    template: `
        <span style="display: inline-block; width: 30px;" 
            [style.color]="calendarDate.isSameMonth() == true? null: 'grey'"
            (click)="onClick()">
            {{calendarDate.getDayInMonth()}}
        <span>
    `
})
export default class MonthlyDayComponent{
    
    @Input()
    calendarDate: CalendarDate ;

    @Output() 
    processingCalendar: EventEmitter<any> = new EventEmitter<any>();
        
    constructor(){
        
    }

    onClick(){
        this.processingCalendar.emit(this.calendarDate)
    }
}