import { Component, OnInit } from '@angular/core';
import {CallServiceService} from "../services/call-service.service";

@Component({
  selector: 'app-review-component',
  templateUrl: './review-component.component.html',
  styleUrls: ['./review-component.component.css']
})
export class ReviewComponentComponent implements OnInit {

  constructor(private callservice: CallServiceService) { }

  ngOnInit() {
  }

  ticketID;
  ticketInfo = null;

  searchTicket(){
    this.callservice.searchTicket(this.ticketID).subscribe(value =>{
      console.log(value.json());
      this.ticketInfo = value.json();
    });
  }

}
