import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './Component-Admin/dashboard-admin/dashboard-admin.component';
import { DashboardComponent } from './Component-User/dashboard/dashboard.component';
import { PageOffreComponent } from './Component-User/page-offre/page-offre.component';
import { LoginPageComponent } from './Component-Admin/login-page/login-page.component';
import { CreateOffreComponent } from './Component-Admin/create-offre/create-offre.component';
import { CandidatureCardComponent } from './Component-Admin/candidature-card/candidature-card.component';
import { OffreAdminComponent } from './Component-Admin/offre-admin/offre-admin.component';

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
    component : OffreAdminComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
