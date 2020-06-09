import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeGroup: FormGroup;
  rolesList: any[];
  genderInput = "Y"
  constructor(
    private router: Router,
    private httpSrv: HttpService
  ) {

  }

  ngOnInit(): void {
    this.rolesList = ["Designer", "Developer", "Tester","Project Manager"];
    this.employeeGroup = new FormGroup(
      {
        profilePic: new FormControl(''),
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        emailAddress: new FormControl('', [Validators.required, Validators.email]),
        phoneNumber: new FormControl('', [Validators.required, Validators.pattern("[0-9]{7,14}")]),
        selectRole: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required])
      }
    )
  }

  genderChange(eleRef, index) {
    if(eleRef && eleRef.hasChildNodes()) {
      let i = 0;
      for(i; i < eleRef.childElementCount; i++) {
        if(index === i) {
          eleRef.children.item(i).setAttribute("class","btn btn-primary gender btn-sm active");
          this.genderInput = eleRef.children.item(i).getAttribute('data-title');
        } else {
          eleRef.children.item(i).setAttribute("class","btn btn-primary gender btn-sm notActive")
        }
      }
    }
  }

  onFileChange(event) {}

  submit(form) {
    let url = '/addAdminEmployee';
    let json = {
      "companyId": 12,
      "fName": form.value.firstName,
      "mName": form.value.lastName,
      "email": form.value.emailAddress,
      "password": "fasds",
      "mobileNo": form.value.phoneNumber,
      "createdDate": null,
      "updatedDate": null,
      "activateFlag": "1"
    }
    this.httpSrv.sendPOSTRequest( url, json ).subscribe(result => {
      console.log(result);
      this.router.navigate(["employee"])
    });
  }
}
