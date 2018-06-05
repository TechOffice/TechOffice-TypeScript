import { CalendarService } from './../service/CalendarService';
import { CalendarWeek } from './../model/CalendarWeek';
import { CalendarDate } from './../model/CalendarDate';
import { Component, Input, OnInit, ViewChildren, ElementRef, ViewChild } from '@angular/core';
import MonthlyCalendarComponent from './MonthlyCalendarComponent';

@Component({
    selector: "calendar",
    template: `
        <div>
            <input #input (focus)="onFocus($event)" (blur)="onBlur($event)"/>
            <monthly-calendar
                *ngIf="isShowCalendar"
                (processingCalendar)="onProcessingCalendar($event)">
            </monthly-calendar>
        </div>
    `
})
export default class CalendarComponent implements OnInit{

    isShowCalendar: boolean = false;
    processing: boolean = false;

    calendarWeeks: CalendarWeek[];
    @ViewChild("input")
    inputElement: ElementRef;

    constructor(private calendarService: CalendarService){
    }

    ngOnInit(): void {
        this.calendarWeeks = this.calendarService.getCalendarWeekArr(new Date());
    }

    onProcessingCalendar(obj: any){
        if (obj instanceof CalendarDate){
            this.inputElement.nativeElement.value = obj.toCalendarString();
            this.isShowCalendar = false;
        }else {
            this.processing = true;
            this.inputElement.nativeElement.focus()
        }
    }

    onFocus(event): void{
        this.isShowCalendar = true;
    }

    onBlur(event): void{
        var me = this;
        setTimeout(function(){
            if (me.processing == true){
                me.processing = false;
            }else {
                me.isShowCalendar = false;
            }
        }, 200);
    }
    
}