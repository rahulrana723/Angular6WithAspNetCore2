import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EventService} from "../service/event.service";
import {Event} from "../model/event.model";

@Component({
  selector: 'app-listevent',
  templateUrl: './listevent.component.html',
  styleUrls: ['./listevent.component.css']
})
export class ListEventComponent implements OnInit {

  events: Event[];

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(data => {
        this.events = data;
      });
  }

  deleteEvent(event: Event): void {
    this.eventService.deleteEvent(event.id)
      .subscribe(data => {
        this.events = this.events.filter(u => u !== event);
      });
  };

  editEvent(event: Event): void {
    localStorage.removeItem("editEventId");
    localStorage.setItem("editEventId", event.id.toString());
    this.router.navigate(['editevent']);
  };

  addEvent(): void {
    this.router.navigate(['addevent']);
  };
}
