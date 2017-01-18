import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/Router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { ReviewComponentComponent } from './review-component/review-component.component';
import {CallServiceService} from "./services/call-service.service";
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  { path: 'signup', component: SignupComponentComponent },
  { path: '*', redirectTo:'', pathMatch:'full'},
  { path: 'review', component: ReviewComponentComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', component: FrontpageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponentComponent,
    ReviewComponentComponent,
    FrontpageComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CallServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }


