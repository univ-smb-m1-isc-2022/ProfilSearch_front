import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageOffreComponent } from './page-offre/page-offre.component';

const routes: Routes = [
  { 
    path: '', 
    component : DashboardComponent,
    data: { animation: 'HomePage' }
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
