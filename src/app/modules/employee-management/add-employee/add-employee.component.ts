import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// declare const $: any;

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeGroup: FormGroup;
  rolesList: any[];
  constructor() { }

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

  onFileChange(event) {}

  submit(form) {}

}
