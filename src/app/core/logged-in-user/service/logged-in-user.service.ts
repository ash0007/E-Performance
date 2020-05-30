import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInUserService {

  private user: User;
  constructor(
    private httpSrv: HttpService
  ) {

  }

  loadUserDetail = () => {
    let url = LoggedUserConstants.GET_USER_INFO_URL;
    return this.httpSrv.sendGETRequest(url);
  }

  setUser = (newUser: any) => {
    this.user = newUser;
  }

  getUser = () => {
    return this.user;
  }
}

export class LoggedUserConstants {
  static readonly GET_USER_INFO_URL: string = 'assets/data/logged-in-user.json';
}

export class User {
  
}

// export interface IUser {

// }