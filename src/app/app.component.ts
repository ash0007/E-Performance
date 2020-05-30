import { Component, OnInit, ChangeDetectorRef, AfterViewInit, OnChanges } from '@angular/core';
import { SessionDataService } from './core/services/session-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'E-Performance';
  constructor(private router: Router, private sessionData: SessionDataService, private cd: ChangeDetectorRef) {}

  hasSessionData: boolean;

  ngOnInit(): void {
    this.hasSessionData = !!this.sessionData.SessionData.sessionData;
    if(this.hasSessionData) {
      this.router.navigate(['department']);
    } else {
      this.router.navigate(['registration']);
    }
  }
  // ngAfterViewInit() {
  //   this.cd.detectChanges();
  //   // this.hasSessionData = !!this.sessionData.SessionData.sessionData;
  // }
  // ngOnChanges() {
  //   this.cd.detectChanges();
  // }
  // sessionDataSet() {
  //   this.hasSessionData = !!this.sessionData.SessionData.sessionData;
  // }
}
