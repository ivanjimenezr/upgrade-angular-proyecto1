import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PisosRoutingModule } from './pisos-routing.module';
import { PisosComponentComponent } from './components/pisos-component/pisos-component.component';


@NgModule({
  declarations: [
    PisosComponentComponent
  ],
  imports: [
    CommonModule,
    PisosRoutingModule
  ]
})
export class PisosModule { }
