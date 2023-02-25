import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageOffreComponent } from './page-offre/page-offre.component';

const routes: Routes = [
  { path: '', component : DashboardComponent },
  { path: 'admin', component : DashboardAdminComponent },
  { path: 'offre', component : PageOffreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
