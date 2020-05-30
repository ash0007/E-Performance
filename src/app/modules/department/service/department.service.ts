import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpSrv: HttpService) { }

  addDepartment(json) {
    let url = '/addDepartment'
    return this.httpSrv.sendPOSTRequest(url, json);
  }

  getDepartmentList() {
    let url = '/getDepartment';
    return this.httpSrv.sendGETRequest(url)
  }
}
