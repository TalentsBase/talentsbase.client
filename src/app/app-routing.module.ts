import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'projects',
    loadChildren: () => import("../app/modules/projects/projects.module").then(m => m.ProjectsModule),
  },
  {
    path: 'clients',
    loadChildren: () => import("../app/modules/clients/clients.module").then(m => m.ClientsModule),
  },
  {
    path: 'talents',
    loadChildren: () => import("../app/modules/talents/talents.module").then(m => m.TalentsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
