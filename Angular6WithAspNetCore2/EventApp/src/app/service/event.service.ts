import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Event} from "../model/event.model";

@Injectable()
export class EventService {
  constructor(private http: HttpClient) { }
  baseUrl: string = '/api/event';

  getEvents() {
    return this.http.get<Event[]>(this.baseUrl+'/GetEvents');
  }

  getEventById(id: number) {
    return this.http.get<Event>(this.baseUrl + '/GetEvent/' + id);
  }

  createEvent(event: Event) {
    return this.http.post(this.baseUrl, event);
  }

  updateEvent(event: Event) {
    return this.http.put(this.baseUrl + '/' + "", event);
  }

  deleteEvent(id: number) {
    return this.http.delete(this.baseUrl + '?id=' + id);
  }
}
