import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Component-User/dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffreComponent } from './Component-User/offre/offre.component';
import { OffrelistComponent } from './offrelist/offrelist.component';
import { DashboardAdminComponent } from './Component-Admin/dashboard-admin/dashboard-admin.component';
import { PageOffreComponent } from './Component-User/page-offre/page-offre.component';
import { LoginPageComponent } from './Component-Admin/login-page/login-page.component';
import { CreateOffreComponent } from './Component-Admin/create-offre/create-offre.component';
import { OffreAdminComponent } from './Component-Admin/offre-admin/offre-admin.component';
import { CandidatureCardComponent } from './Component-Admin/candidature-card/candidature-card.component';
import { PageOffreAdminComponent } from './Component-Admin/page-offre-admin/page-offre-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    OffreComponent,
    OffrelistComponent,
    DashboardAdminComponent,
    PageOffreComponent,
    LoginPageComponent,
    CreateOffreComponent,
    OffreAdminComponent,
    CandidatureCardComponent,
    PageOffreAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
