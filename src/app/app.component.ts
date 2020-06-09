import { Component, OnInit } from '@angular/core';
import { SessionDataService } from './core/services/session-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'E-Performance';
  constructor(private router: Router, private sessionData: SessionDataService) {}

  hasSessionData: boolean;

  ngOnInit(): void {
    this.hasSessionData = !!this.sessionData.SessionData.sessionData;
    if(this.hasSessionData) {
      this.router.navigate(['department']);
    } else {
      this.router.navigate(['registration']);
    }
    // this.router.navigate(['employee']);
    // this.router.navigate(['designation']);
  }
  // sessionDataSet() {
  //   this.hasSessionData = !!this.sessionData.SessionData.sessionData;
  // }
}
