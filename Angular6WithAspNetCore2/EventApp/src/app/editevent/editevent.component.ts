import { Component, OnInit } from '@angular/core';
import {EventService} from "../service/event.service";
import {Router} from "@angular/router";
import {Event} from "../model/event.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-editevent',
  templateUrl: './editevent.component.html',
  styleUrls: ['./editevent.component.css']
})
export class EditEventComponent implements OnInit {

  event: Event;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private eventService: EventService) { }

  ngOnInit() {
    let eventId = localStorage.getItem("editEventId");
    if (!eventId) {
      this.router.navigate(['listevent']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: ['', Validators.required],
      eventName: ['', Validators.required],
      place: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.eventService.getEventById(+eventId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  backToList(): void {
    this.router.navigate(['listevent']);
  };

  onSubmit() {
    this.eventService.updateEvent(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['listevent']);
        },
        error => {
          alert(error);
        });
  }

}
