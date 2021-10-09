import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-modules/material.module';
import { CalendarHoursService } from '../service/calendar-hours.service';
import {
  CalendarDayViewComponent
} from './calendar-day-view/calendar-day-view.component';
import { 
  CalendarDayViewHeaderComponent
} from './calendar-day-header/calendar-day-view-header.component';
import {
  CalendarDayViewGridComponent
} from './calendar-day-view-grid/calendar-day-view-grid.component';

@NgModule({
    declarations: [
      CalendarDayViewComponent,
      CalendarDayViewHeaderComponent,
      CalendarDayViewGridComponent
    ],
    imports: [
      CommonModule,
      MaterialModule
    ],
    exports: [
      CalendarDayViewComponent
    ],
    providers: [
      CalendarHoursService
    ]
  })
export class CalendarDayViewModule{}