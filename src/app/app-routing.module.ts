import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ``, loadChildren: () => import('./pages/home/home.module').then(m=>m.HomeModule)
  },
  {
    path: `about`, loadChildren: () => import('./pages/about/about.module').then(m=>m.AboutModule)
  },
  {
    path: `pisos`, loadChildren: () => import('./pages/pisos/pisos.module').then(m=>m.PisosModule)
  },
  {
    path: `login`, loadChildren: () => import('./pages/login/login.module').then(m=>m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
