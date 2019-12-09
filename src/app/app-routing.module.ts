import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { StarterComponent } from './components/starter/starter.component';
import { IntrocardComponent } from './components/introcard/introcard.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchdetailsComponent } from './components/searchdetails/searchdetails.component';
import { SearchComponent } from './components/search/search.component';
import { SearchlistComponent } from './components/searchlist/searchlist.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { EnterotpComponent } from './components/enterotp/enterotp.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ProfilesettingsComponent } from './component/profilesettings/profilesettings.component';


const routes: Routes = [
  { path: '', component: IntrocardComponent },
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'enterotp', component: EnterotpComponent},
  { path: 'forgetpassword', component: ForgetpasswordComponent},
  { path: 'intro', component: IntrocardComponent},
  { path: 'login',component: LoginComponent },
  { path: 'orderdetail', component: OrderDetailsComponent},
  { path: 'notifications', component: NotificationsComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'myorders', component: MyordersComponent },
  { path: 'verifyotp', component: VerifyOtpComponent},
  { path: 'profilesetting', component: ProfilesettingsComponent},
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'myorder', loadChildren: './pages/myorder/myorder.module#MyorderPageModule' },
  { path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'setting', loadChildren: './pages/setting/setting.module#SettingPageModule' },
  { path: 'search', component:SearchComponent},
  { path: 'search-list', component : SearchlistComponent},
  {path: 'search-detail', component: SearchdetailsComponent},
  { path: 'address-popup', loadChildren: './pages/address-popup/address-popup.module#AddressPopupPageModule' }, 
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
