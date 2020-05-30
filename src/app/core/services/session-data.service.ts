import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionDataService {

  private sessionData: any = {};
  constructor() { }

  set SessionData(data: any) {
    this.sessionData = data;
  }
  get SessionData() {
    return this.sessionData;
  }
}
