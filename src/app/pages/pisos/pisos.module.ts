import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PisosRoutingModule } from './pisos-routing.module';
import { PisosComponentComponent } from './components/pisos-component/pisos-component.component';
import { PisosDetailComponent } from './components/pisos-detail/pisos-detail.component';


@NgModule({
  declarations: [
    PisosComponentComponent,
    PisosDetailComponent
  ],
  imports: [
    CommonModule,
    PisosRoutingModule
  ]
})
export class PisosModule { }
