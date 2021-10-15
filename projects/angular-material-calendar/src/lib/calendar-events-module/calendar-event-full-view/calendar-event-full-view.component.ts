import { Component, Input, ElementRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CalendarEventFull } from '../../calendar-modal/calendar-event/calendar-event-full';
import { CalendarView } from '../../calendar-modal/calendar-view/calendar-view';
import { CalendarEventService } from '../../service/calendar-event.service';

const LEFT = "12.7%";
const TOP = "5em";
const HEIGHT = "5em";

@Component({
  selector: 'angular-material-calendar-event-full-view',
  templateUrl: './calendar-event-full-view.component.html',
  styleUrls: [
    './calendar-event-full-view.component.scss'
  ]
})
export class CalendarEventFullViewComponent implements OnInit {
    @Input() event?: CalendarEventFull;
    width?: number;
    _view$?: Observable<CalendarView>;
    _view?: CalendarView;
    time?: string;

    constructor(
      private store: Store<{ _view: CalendarView}>,
      private _element: ElementRef<HTMLElement>,
      private calendarEventService: CalendarEventService) {
        this._view$ = store.select('_view');
        this._view$.subscribe((v) => this._view = v);
    }
    
    ngOnInit(): void {
      this.width = this._view?.view == 'week' ? 11 : 100;
      this.calendarEventService.setEventStyle(this.event!,
      this._element, LEFT, TOP, this.width!, HEIGHT);
      this.time = this.calendarEventService.eventsubtitle(this.event!);
    }

}