import { PisosDetailComponent } from './components/pisos-detail/pisos-detail.component';
import { PisosComponentComponent } from './components/pisos-component/pisos-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: PisosComponentComponent
  },
  {
    path: 'detail/:id', component: PisosDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PisosRoutingModule { }
