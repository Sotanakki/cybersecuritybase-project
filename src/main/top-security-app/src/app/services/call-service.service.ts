import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import {SignupResponse} from "../signup-component/SignupResponse";
import {Observable} from "Rxjs";

@Injectable()
export class CallServiceService {

  constructor(private http:Http) { }

  serviceUrl = "/proxy";


  postForm(name:string, address:string, ssn:string){
    var url = this.serviceUrl+"?name=" + name +"&address=" + address + "&creditcardNumber="+ssn;
    return this.http.get(url);
  }

  getData(){

  }

  searchTicket(ticketid:string){
    var url = this.serviceUrl+"/getTicket?id="+ticketid;
    return this.http.get(url);
  }


  readSigned() {
    var url = this.serviceUrl+"/getSignups";
    return this.http.get(url);
  }

  readVideoUrl(){
    var url = this.serviceUrl+"/readVideoUrl";
    return this.http.get(url);
  }


  getAdminLogin(user, password) {
    var url = this.serviceUrl+"/getAdminLogin?user="+user+"&password=" +password;
    return this.http.get(url);
  }
}
