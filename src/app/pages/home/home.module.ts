import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { CardNewsComponent } from './components/card-news/card-news.component';


@NgModule({
  declarations: [
    HomeComponentComponent,
    CardNewsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
