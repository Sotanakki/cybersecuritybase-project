import { Component, OnInit } from '@angular/core';
import {CallServiceService} from "../services/call-service.service";

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent implements OnInit {

  constructor(private callService:CallServiceService) { }

  model = {
    name:'',
    address:'',
    ssn:''
  };

  ticketId = null;

  ngOnInit() {
  }

  submitSignup(){
    console.log(this.model);
    this.callService.postForm(this.model.name, this.model.address, this.model.ssn).subscribe( value =>{
      var response = value.json();

      this.ticketId = response.ticketId;
    })
  }



}
