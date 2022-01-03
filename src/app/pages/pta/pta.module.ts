import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PtaRoutingModule } from './pta-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PtaFormComponent } from './components/pta-form/pta-form.component';
import { PtaComponentComponent } from './components/pta-component/pta-component.component';

@NgModule({
  declarations: [
    PtaFormComponent,
    PtaComponentComponent

  ],
  imports: [
    CommonModule,
    PtaRoutingModule,
    ReactiveFormsModule
  ]
})
export class PtaModule { }
