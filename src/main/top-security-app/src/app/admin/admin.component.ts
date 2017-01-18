import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {CallServiceService} from "../services/call-service.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private callservice:CallServiceService,private sanitizer: DomSanitizer) { }

  signups = [];

  ngOnInit() {
    this.callservice.readSigned().subscribe(value =>{
      this.signups = value.json();
    });
  }

  

}
