import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard'; 

const routes: Routes = [
  {
    path: ``, loadChildren: () => import('./pages/home/home.module').then(m=>m.HomeModule)
  },
  {
    path: `about`, loadChildren: () => import('./pages/about/about.module').then(m=>m.AboutModule)
  },
  {
    path: `pisos`, loadChildren: () => import('./pages/pisos/pisos.module').then(m=>m.PisosModule),
    canActivate: [AuthGuard] //Con esto protegemos esta ruta
  },
  {
    path: `login`, loadChildren: () => import('./pages/login/login.module').then(m=>m.LoginModule)
  },
  {
    path: `register`, loadChildren: () => import('./pages/register/register.module').then(m=>m.RegisterModule)
  },
  {
    path: `pta`, loadChildren: () => import('./pages/pta/pta.module').then(m=>m.PtaModule),
    canActivate: [AuthGuard] //Con esto protegemos esta ruta
  },
  {
    path: `profile/:id`, loadChildren: () => import('./pages/profile/profile.module').then(m=>m.ProfileModule),
    canActivate: [AuthGuard] //Con esto protegemos esta ruta
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
