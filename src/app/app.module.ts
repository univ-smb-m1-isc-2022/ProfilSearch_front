import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
// import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import {MatIconModule} from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Component-User/dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffreComponent } from './Component-User/offre/offre.component';
import { DashboardAdminComponent } from './Component-Admin/dashboard-admin/dashboard-admin.component';
import { PageOffreComponent } from './Component-User/page-offre/page-offre.component';
import { LoginPageComponent } from './Component-Admin/login-page/login-page.component';
import { CreateOffreComponent } from './Component-Admin/create-offre/create-offre.component';
import { OffreAdminComponent } from './Component-Admin/offre-admin/offre-admin.component';
import { CandidatureCardComponent } from './Component-Admin/candidature-card/candidature-card.component';
import { PageOffreAdminComponent } from './Component-Admin/page-offre-admin/page-offre-admin.component';
import { ModalCandidatureComponent } from './Component-Admin/modal-candidature/modal-candidature.component';
import { DeleteCandidatureComponent } from './Component-User/delete-candidature/delete-candidature.component';
import { Constantes } from './constantes';
import { LocalService } from './services/local.service';
import { AuthService } from './services/auth.services';
import { OAuth2RedirectHandlerComponent } from './Component-Admin/oauth2-redirect-handler-component/oauth2-redirect-handler-component.component';
import { SignupPageComponent } from './Component-Admin/signup-page/signup-page.component';
import { InvitePageComponent } from './Component-Admin/invite-page/invite-page.component';
import { ModalCreateQuestionComponent } from './Component-Admin/modal-create-question/modal-create-question.component';
import { ModalConfirmationComponent } from './Component-User/modal-confirmation/modal-confirmation.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    OffreComponent,
    DashboardAdminComponent,
    PageOffreComponent,
    LoginPageComponent,
    CreateOffreComponent,
    OffreAdminComponent,
    CandidatureCardComponent,
    PageOffreAdminComponent,
    ModalCandidatureComponent,
    DeleteCandidatureComponent,
    OAuth2RedirectHandlerComponent,
    SignupPageComponent,
    InvitePageComponent,
    ModalCreateQuestionComponent,
    ModalConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSlideToggleModule,
    // SocialLoginModule,
    MatIconModule
  ],
  providers: [
    Constantes,
    AuthService,
    LocalService

    // {
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: false,
    //     providers: [
    //       {
    //         id: GoogleLoginProvider.PROVIDER_ID,
    //         provider: new GoogleLoginProvider('610269652409-q16dc1sskf4p1jvbk27msfsah035fbpl.apps.googleusercontent.com')
    //       }
    //     ]
    //   } as SocialAuthServiceConfig,
    // }
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
