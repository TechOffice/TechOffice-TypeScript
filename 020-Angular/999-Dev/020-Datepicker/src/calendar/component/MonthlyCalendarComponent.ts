import { MonthlyCalendar } from './../model/MonthlyCalendar';
import { CalendarService } from './../service/CalendarService';
import { CalendarWeek } from './../model/CalendarWeek';
import { CalendarDate } from './../model/CalendarDate';
import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "monthly-calendar",
    template: `
        <div>
            <monthly-header 
                [monthlyCalendar]="monthlyCalendar" 
                (processingCalendar)="onProcessingCalendar($event)">
            </monthly-header>
            <ng-container *ngFor="let calendarWeek of monthlyCalendar.getCalendarWeeks()">
                <monthly-week 
                    [calendarWeek]="calendarWeek"
                    (processingCalendar)="onProcessingCalendar($event)">
                </monthly-week>
            </ng-container>
        </div>
    `
})
export default class MonthlyCalendarComponent implements OnInit{

    monthlyCalendar: MonthlyCalendar; 

    @Output() 
    processingCalendar: EventEmitter<any> = new EventEmitter<any>();

    constructor(private calendarService: CalendarService){
    }

    ngOnInit(): void {
        var selectedDate =  new Date();
        var calendarWeeks = this.calendarService.getCalendarWeekArr(selectedDate);
        this.monthlyCalendar = new MonthlyCalendar(selectedDate, calendarWeeks);
    }

    onProcessingCalendar(obj: any): void{
        this.processingCalendar.emit(obj);
    }
}