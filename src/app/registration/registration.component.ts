import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './service/registration.service';
import { Router } from '@angular/router';
import { SessionDataService } from '../core/services/session-data.service';

@Component({
  selector: 'company-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Output() sessionDataSet;
  myForm: FormGroup;
  industriesList: any[];

  constructor(private registrationSrv: RegistrationService, private sessionData: SessionDataService, private cd: ChangeDetectorRef, private router: Router) { }

  ngOnInit(): void {
    this.sessionDataSet = new EventEmitter<any>();
    this.industriesList = ["IT Industry", "Manufacturing", "Agriculture", "Construction", "Mining", "Investment", "Insurance", "Finance", "Pharmaceutical Industry", "Coal", "Transport", "Steel", "Bank", "Retail", "Telecommunication"]
    this.myForm = new FormGroup({
      companyName: new FormControl('', [Validators.required]),
      portalName: new FormControl('', [Validators.required, Validators.email]),
      industryType: new FormControl('', [Validators.required]),
      adminMobile: new FormControl('', [Validators.required, Validators.pattern("[0-9]{7,14}")])
    });
  }

  onSubmit(form): void {
    let json = this.myForm.value;
    this.sessionDataSet.emit('');
    json.companyDomain = "test";
    json.adminEmail = "krishna@gmail.com";
    json.contactPerson = "boss";
    json.apiURLPrefix = "test";
    this.registrationSrv.createCompany(json).subscribe(result => {
      this.sessionData.SessionData = {'a': 33};
      this.cd.detectChanges();
      console.log("result");
      this.router.navigate(["department"]);
    });
  }

}
