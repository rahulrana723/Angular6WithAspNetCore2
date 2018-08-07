import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showhome() {
    this.router.navigate(['home']);
  }

  showevent() {
    this.router.navigate(['listevent']);
  }

  showcontactus() {
    this.router.navigate(['contactus']);
  }

  showaboutus() {
    this.router.navigate(['aboutus']);
  }

}
