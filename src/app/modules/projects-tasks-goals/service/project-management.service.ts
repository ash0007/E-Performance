import { Injectable } from '@angular/core';
import { URLConstants } from '../../common-components/constants/urlconstants';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagementService {

  constructor(
    private httpSrv: HttpService
  ) { }

  getProjectsList = () => {
    let url = URLConstants.GET_PROJECT_LIST;
    return this.httpSrv.sendGETRequest(url);
  }
}
