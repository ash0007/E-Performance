import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  context: string = "http://3.133.244.20:8088/evaluatemyperformance/emf";
  constructor(
    private httpClient: HttpClient
  ) { }

  sendGETRequest = (url) => {
    url = this.context + url;
    return this.httpClient.get(url);
  }

  sendPOSTRequest = (url, json) => {
    url = this.context + url;
    return this.httpClient.post(url, json);
  }
}
