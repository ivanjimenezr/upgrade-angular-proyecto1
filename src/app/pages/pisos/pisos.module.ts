import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PisosRoutingModule } from './pisos-routing.module';
import { PisosComponentComponent } from './components/pisos-component/pisos-component.component';
import { PisosDetailComponent } from './components/pisos-detail/pisos-detail.component';
import { PisosEditComponent } from './components/pisos-edit/pisos-edit.component';


@NgModule({
  declarations: [
    PisosComponentComponent,
    PisosDetailComponent,
    PisosEditComponent
  ],
  imports: [
    CommonModule,
    PisosRoutingModule,
    ReactiveFormsModule
  ]
})
export class PisosModule { }
