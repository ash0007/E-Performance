import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DepartmentService } from '../service/department.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {

  departments = [];
  deptFormGroup: FormGroup;
  constructor(private deptSrv: DepartmentService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.deptFormGroup = new FormGroup({
      deptName: new FormControl('', [Validators.required])
    })
    this.deptSrv.getDepartmentList().subscribe(result => {
      this.departments = result['dataObj'];
    })
  }

  onSubmit(form) {
    let json = {
      "departmentName": form.value.deptName
    }
    this.deptSrv.addDepartment(json).subscribe(result => {
      if(result && result['dataObj'] && result['dataObj']['departmentName']) {
        this.cd.detectChanges();
        this.departments.push(result['dataObj']['departmentName']);
      }
    });
    console.log('submit');
  }

}
