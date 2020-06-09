import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-designation',
  templateUrl: './create-designation.component.html',
  styleUrls: ['./create-designation.component.css']
})
export class CreateDesignationComponent implements OnInit {

  desigFormGroup: FormGroup;
  permissionsInfoConfig: any[];
  constructor() { }

  ngOnInit(): void {
    this.desigFormGroup = new FormGroup({
      desigName: new FormControl('',[Validators.required])
    });
    let permsList = this.setPermissionListConfig();
    for(let i = 0; i < permsList.length; i++) {
      for (let j = 0; j < permsList[i].permissionList.length; j++) {
        this.desigFormGroup.addControl('permission'+i+j, new FormControl(permsList[i].permissionList[j].value));
      }
    }
    this.permissionsInfoConfig = this.setPermissionListConfig();
  }

  onSubmit(form) {
    let json = {
      "designationName": "Project Manager14",
      "departmentId": 1,
      "parentDesignationId": 0,
      "designationLevelNo": 0,
      "canCreateEmployee": 0,
      "canCreateFeedbackReq": 0,
      "canCreateRateSkill": 0,
      "canCreateTask": 0,
      "canCreateProject": 0,
      "canCreateTeam": 0,
      "canAddEmployeeToTeam": 0,
      "canEvaluateSkill": 0,
      "canViewTeam": 0,
      "canViewAllTask": 0,
      "canApproveGoal": 0
    }

    console.log(form);
  }

  setPermissionListConfig() {
    return [
      {
        title: "Employee Details Permissions",
        permissionList: [
          {
            type: "add",
            value: true
          },
          {
            type: "edit",
            value: true
          },
          {
            type: "update",
            value: true
          },
          {
            type: "delete",
            value: true
          }
        ]
      },
      {
        title: "Post Job Permissions",
        permissionList: [
          {
            type: "add",
            value: false
          },
          {
            type: "edit",
            value: true
          },
          {
            type: "update",
            value: true
          },
          {
            type: "delete",
            value: false
          }
        ]
      },
      {
        title: "Resume Permissions",
        permissionList: [
          {
            type: "add",
            value: false
          },
          {
            type: "edit",
            value: false
          },
          {
            type: "update",
            value: true
          },
          {
            type: "delete",
            value: false
          }
        ]
      }
    ]
  }

}
