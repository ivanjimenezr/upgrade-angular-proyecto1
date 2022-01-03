import { PtaFormComponent } from './components/pta-form/pta-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PtaComponentComponent } from './components/pta-component/pta-component.component';

const routes: Routes = [
  {
    path: '', component:PtaComponentComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PtaRoutingModule { }
