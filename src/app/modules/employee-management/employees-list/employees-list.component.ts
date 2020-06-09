import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employeeList: any[];
  constructor(private httpSrv: HttpService, private router: Router) { }

  ngOnInit(): void {
    let url = '/getEmployeeData';
    this.httpSrv.sendGETRequest(url).subscribe(result => {
      this.employeeList = result['dataObj'];
    });
  }

  ceateTeam(): void {
    this.router.navigate(['employee/add-employee']);
  }

}
