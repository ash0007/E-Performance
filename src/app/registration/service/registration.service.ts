import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpSrv: HttpService) { }

  createCompany(json) {
    let url = '/addCompany';
    return this.httpSrv.sendPOSTRequest(url, json);
  }

  getCompany() {
    let url = '/getCompany';
    return this.httpSrv.sendPOSTRequest(url, {});
  }
}
