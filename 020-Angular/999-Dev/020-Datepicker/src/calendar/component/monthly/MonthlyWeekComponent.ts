import { CalendarWeek } from './../../model/CalendarWeek';
import { CalendarDate } from './../../model/CalendarDate';
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "monthly-week",
    template: `
        <div>
            <ng-container *ngFor="let calendarDate of calendarWeek.getCalendarDates()">
                <monthly-day 
                    [calendarDate]="calendarDate"
                    (processingCalendar)="onProcessingCalendar($event)">
                </monthly-day>
            </ng-container>
        </div>
    `
})
export default class MonthlyWeekComponent{
    
    @Input()
    calendarWeek: CalendarWeek;

    @Output() 
    processingCalendar: EventEmitter<any> = new EventEmitter<any>();

    onProcessingCalendar(obj: any){
        this.processingCalendar.emit(obj);
    }
}
