import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CalendarView } from './calendar-modal/calendar-view/calendar-view';
import { CalendarEventInput } from './calendar-modal/calendar-event/calendar-event-input';

@Component({
  selector: 'lib-angular-material-calendar',
  templateUrl: './angular-material-calendar.component.html',
  styleUrls: [
    './angular-material-calendar.component.scss'
  ]
})
export class AngularMaterialCalendarComponent implements OnInit {
  _view$?: Observable<CalendarView>;
  _view?: CalendarView;
  @Input()
  events?: CalendarEventInput[];
  
  constructor(
    private store: Store<{ _view: CalendarView}> 
  ) {
    this._view$ = store.select('_view');
    this._view$.subscribe((v) => this._view = v);
    this.events = JSON.parse(`{ "data" : 
    [
    {
        "start": 1634621592000,
        "end": 1634625192000,
        "title": "string  string string string string string" ,
        "color": "#e2e6c7"
    },
    {
        "start": 1634743992000,
        "end": 1634747592000,
        "title": "string",
        "color": "#e2e6c7"
    },
    {
      "start": 1634826792000,
      "end": 1634833992000,
      "title": "string",
      "color": "#d8c6d9"
  },
    {
        "start": 1634995992000,
        "end": 1635010392000,
        "title": "string",
        "color": "#d8c6d9"
    },
    {
      "start": 1634640759000,
      "end": 1634986359000,
      "title": "string",
      "color": "#d8c6d9"
  }
    ]
}
      `).data;
  }

  ngOnInit(): void {
  }

}
