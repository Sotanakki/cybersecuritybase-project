import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/Router';
import {CallServiceService} from "../services/call-service.service";

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  constructor(private router:Router, private sanitizer: DomSanitizer, private callservice:CallServiceService) { }
  videoUrl;
  password;
  user;


  ngOnInit() {
    this.callservice.readVideoUrl().subscribe( value =>{
      console.log(this.sanitizer.bypassSecurityTrustResourceUrl(value.text()));
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(value.text());
    })
  }


  toSignup(){
    this.router.navigateByUrl('/signup');
  }

  toAdmin(){
    this.callservice.getAdminLogin(this.user, this.password).subscribe(value =>{
      if(value.text() == "true"){
        this.router.navigateByUrl('/admin');
      }else{
        alert("wrong password");
      }
    });


  }

  toReview(){
    this.router.navigateByUrl('/review');
  }

  trustUrl(url){
    var trustedUrl = this.sanitizer.bypassSecurityTrustUrl(url);
    return trustedUrl;
  }



}
