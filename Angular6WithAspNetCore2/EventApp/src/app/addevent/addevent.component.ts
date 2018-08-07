import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EventService} from "../service/event.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private eventService: EventService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      eventname: ['', Validators.required],
      place: ['', Validators.required],
      description: ['', Validators.required]
    });

  }

  onSubmit() {
    this.eventService.createEvent(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['listevent']);
      });
  }

}
