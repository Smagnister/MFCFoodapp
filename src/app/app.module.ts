import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { StarterComponent } from './components/starter/starter.component';
import { IntrocardComponent } from './components/introcard/introcard.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';

import { SearchdetailsComponent } from './components/searchdetails/searchdetails.component';
import { SearchComponent } from './components/search/search.component';
import { SearchlistComponent } from './components/searchlist/searchlist.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnterotpComponent } from './components/enterotp/enterotp.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddressPopupPageModule } from './pages/address-popup/address-popup.module';
import { CommonAjaxService } from './common/common-ajax.service';
import { Camera } from '@ionic-native/camera/ngx';
import { commonvars } from './common/commonvars';
import {FCM} from '@ionic-native/fcm/ngx';
import { ProfilesettingsComponent } from './component/profilesettings/profilesettings.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MyordersComponent,
    IntrocardComponent,
    VerifyOtpComponent,
    ForgetpasswordComponent,
    SearchComponent,
    NotificationsComponent,
    SearchlistComponent,
    SearchdetailsComponent,
    EnterotpComponent,
    //new template Changes 
    OrderDetailsComponent,
    SignupComponent,
    SigninComponent,
    ProfilesettingsComponent

  ],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    AddressPopupPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    FCM,
    CommonAjaxService,
    commonvars,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
