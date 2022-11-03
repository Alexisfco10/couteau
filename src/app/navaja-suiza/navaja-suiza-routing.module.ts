import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavajaSuizaPage } from './navaja-suiza.page';

const routes: Routes = [
  {
    path: '',
    component: NavajaSuizaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavajaSuizaPageRoutingModule {}
