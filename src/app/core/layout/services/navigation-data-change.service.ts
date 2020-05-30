import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

class HeaderInfo {
  name: string;
  route: string;
  children?: any[];
}
@Injectable({
  providedIn: 'root'
})
export class NavigationDataChangeService {

  private headerInfo = new BehaviorSubject(new HeaderInfo());
  currentHeaderInfo = this.headerInfo.asObservable();
  constructor() { }

  changeHeaderInfo = (_headerInfo) => {
    this.headerInfo.next(_headerInfo);
  }
}
