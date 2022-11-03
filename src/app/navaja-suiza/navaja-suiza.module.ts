import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavajaSuizaPageRoutingModule } from './navaja-suiza-routing.module';

import { NavajaSuizaPage } from './navaja-suiza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavajaSuizaPageRoutingModule
  ],
  declarations: [NavajaSuizaPage]
})
export class NavajaSuizaPageModule {}
