import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddEventComponent } from './addevent/addevent.component';
import { EditEventComponent } from './editevent/editevent.component';
import { ListEventComponent } from "./listevent/listevent.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import {EventService} from "./service/event.service";

@NgModule({
  declarations: [
    AppComponent,
    ListEventComponent,
    AddEventComponent,
    EditEventComponent,
    NavbarComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
