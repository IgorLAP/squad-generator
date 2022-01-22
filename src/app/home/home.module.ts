import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './../shared/material/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { SquadAppComponent } from './squad-app/squad-app.component';


@NgModule({
  declarations: [
    LoadingPageComponent,
    SquadAppComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class HomeModule { }
