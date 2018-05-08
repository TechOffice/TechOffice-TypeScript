import { MonthlyCalendar } from './../../model/MonthlyCalendar';
import { CalendarService } from './../../service/CalendarService';
import { Input, Output, EventEmitter } from '@angular/core';
import { Component } from '@angular/core';


@Component({
    selector: "monthly-header",
    template: `
        <div>
            <b>Year</b>: {{monthlyCalendar.getSelectedDate() | year}}
        </div>
        <div>
            <b>Month</b>: {{monthlyCalendar.getSelectedDate() | month}} 
            <button (click)="previousMonth()">&lt;</button>
            <button (click)="nextMonth()">&gt;</button>
        </div>
    `
})
export default class MonthlyHeaderComponent {

    @Input()
    monthlyCalendar: MonthlyCalendar;

    @Output() 
    processingCalendar: EventEmitter<any> = new EventEmitter<any>();

    constructor(private calendarService: CalendarService){
        
    }

    previousMonth(){
        this.processingCalendar.emit("");
        var date: Date = this.calendarService.getPreviousMonth(this.monthlyCalendar.getSelectedDate());
        var calendarWeeks = this.calendarService.getCalendarWeekArr(date);
        this.monthlyCalendar.setSelectedDate(date);
        this.monthlyCalendar.setCalendarWeeks(calendarWeeks);
    }

    nextMonth(){
        this.processingCalendar.emit("");       
        var date: Date = this.calendarService.getNextMonth(this.monthlyCalendar.getSelectedDate());
        var calendarWeeks = this.calendarService.getCalendarWeekArr(date);
        this.monthlyCalendar.setSelectedDate(date);
        this.monthlyCalendar.setCalendarWeeks(calendarWeeks);
    }
}