import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageOffreComponent } from './page-offre/page-offre.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateOffreComponent } from './create-offre/create-offre.component';

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
    path: 'offre', 
    component : PageOffreComponent ,
    data : { animation: 'OffrePage' }
  },
  {
    path: 'createoffre',
    component : CreateOffreComponent,
    data : { animation: 'CreateOffrePage' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
