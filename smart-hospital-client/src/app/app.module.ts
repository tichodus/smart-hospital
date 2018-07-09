import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialComponentsModule } from './modules/material-components/material-components.module';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CardRoomsComponent } from './components/card-rooms/card-rooms.component';
import { CardPatientsComponent } from './components/card-patients/card-patients.component';
import { CardConditionsComponent } from './components/card-conditions/card-conditions.component';
import { CardRoomComponent } from './components/card-room/card-room.component';
import { CardPatientComponent } from './components/card-patient/card-patient.component';
import { CardConditionComponent } from './components/card-condition/card-condition.component';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { DashboardSidebarComponent } from './components/dashboard-sidebar/dashboard-sidebar.component';
import { DefaultSidebarComponent } from './components/default-sidebar/default-sidebar.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidemenuComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    LoginPageComponent,
    RegisterComponent,
    RegisterPageComponent,
    DashboardPageComponent,
    CardRoomsComponent,
    CardPatientsComponent,
    CardConditionsComponent,
    CardRoomComponent,
    CardPatientComponent,
    CardConditionComponent,
    StatisticsPageComponent,
    DashboardSidebarComponent,
    DefaultSidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialComponentsModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'contact', component: ContactPageComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent },
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'statistics', component: StatisticsPageComponent },
    ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
