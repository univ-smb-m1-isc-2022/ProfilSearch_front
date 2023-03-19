import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './Component-Admin/dashboard-admin/dashboard-admin.component';
import { DashboardComponent } from './Component-User/dashboard/dashboard.component';
import { PageOffreComponent } from './Component-User/page-offre/page-offre.component';
import { LoginPageComponent } from './Component-Admin/login-page/login-page.component';
import { CreateOffreComponent } from './Component-Admin/create-offre/create-offre.component';
import { CandidatureCardComponent } from './Component-Admin/candidature-card/candidature-card.component';
import { OffreAdminComponent } from './Component-Admin/offre-admin/offre-admin.component';
import { PageOffreAdminComponent } from './Component-Admin/page-offre-admin/page-offre-admin.component';
import { DeleteCandidatureComponent } from './Component-User/delete-candidature/delete-candidature.component';
import { OAuth2RedirectHandlerComponent } from './Component-Admin/oauth2-redirect-handler-component/oauth2-redirect-handler-component.component';
import { SignupPageComponent } from './Component-Admin/signup-page/signup-page.component';
import { InvitePageComponent } from './Component-Admin/invite-page/invite-page.component';

const routes: Routes = [
  { 
    path: '', 
    component : DashboardComponent,
    data: { animation: 'HomePage' }
  },
  {
    path: 'login',
    component : LoginPageComponent,
    data : { animation: 'LoginPage' }
  },
  { 
    path: 'admin', 
    component : DashboardAdminComponent,
    data: { animation: 'AdminPage' }
  },
  { 
    path: 'offre/:id', 
    component : PageOffreComponent ,
    data : { animation: 'OffrePage' }
  },
  {
    path: 'createoffre',
    component : CreateOffreComponent,
    data : { animation: 'CreateOffrePage' }
  },
  {
    path: 'offre-admin/:id',
    component : PageOffreAdminComponent,
  },
  {
    path: 'delete/:id',
    component : DeleteCandidatureComponent,
  },
  {
    path: 'oauth2/redirect',
    component : OAuth2RedirectHandlerComponent
  },
  {
    path: 'signup',
    component : SignupPageComponent
  },
  {
    path: 'invite',
    component : InvitePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
