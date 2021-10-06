import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CalendarDate } from '../../calendar-modal/calendar-date/calendar-date';
import { CalendarHours } from '../../calendar-modal/calendar-hours/calendar-hours';
import { CalendarHoursService } from '../../service/calendar-hours.service';


@Component({
  selector: 'angular-material-calendar-week-view-grid',
  templateUrl: './calendar-week-view-grid.component.html',
  styleUrls: [
    './calendar-week-view-grid.component.scss'
  ]
})
export class CalendarWeekViewGridComponent {

  date$?: Observable<CalendarDate>;
  _currentDate?: CalendarDate;
  calendarHours?: CalendarHours[][];

    constructor(
      private store: Store<{ _date: CalendarDate}>,
      private _calendarWeekService: CalendarHoursService
    ) {
      this.date$ = store.select('_date');
      this.date$.subscribe((d: CalendarDate) => {
          this._currentDate = d;
          this.calendarHours = this._calendarWeekService.getCalndarHoursGridData(this._currentDate!);
          });
    }
}