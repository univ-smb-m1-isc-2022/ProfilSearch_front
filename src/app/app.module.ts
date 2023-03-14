import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffreComponent } from './offre/offre.component';
import { OffrelistComponent } from './offrelist/offrelist.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { PageOffreComponent } from './page-offre/page-offre.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateOffreComponent } from './create-offre/create-offre.component';
import { OffreAdminComponent } from './offre-admin/offre-admin.component';
import { CandidatureCardComponent } from './candidature-card/candidature-card.component';

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
    CandidatureCardComponent
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
