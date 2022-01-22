import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoadingPageComponent } from './loading-page/loading-page.component';
import { SquadAppComponent } from './squad-app/squad-app.component';

const routes: Routes = [
  {
    path: 'home',
    component: LoadingPageComponent
  },
  {
    path: 'app',
    component: SquadAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
