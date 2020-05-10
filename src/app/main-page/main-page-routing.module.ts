import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page.component';


const routes: Routes = [{
  path: '',
  component: MainPageComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'dashboard'
    },
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: 'profile',
      loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
    },
    {
      path: 'transportations',
      loadChildren: () => import('./transportations/transportations.module').then(m => m.TransportationsModule)
    },
    {
      path: 'requests',
      loadChildren: () => import('./requests/requests.module').then(m => m.RequestsModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
