import { RouterModule, Routes } from '@angular/router';
import {AddEventComponent} from "./addevent/addevent.component";
import {ListEventComponent} from "./listevent/listevent.component";
import { EditEventComponent } from "./editevent/editevent.component";
import { HomeComponent } from "./home/home.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContactusComponent } from "./contactus/contactus.component";

const routes: Routes = [
  { path: 'addevent', component: AddEventComponent },
  { path: 'listevent', component: ListEventComponent },
  { path: 'editevent', component: EditEventComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: '', component: HomeComponent}
];

export const routing = RouterModule.forRoot(routes);
