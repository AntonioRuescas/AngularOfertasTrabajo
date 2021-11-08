import { OffersComponent } from './offers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableAdminModule } from 'src/app/components/tableAdmin/tableAdmin.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [OffersComponent],
  imports: [CommonModule, RouterModule, TableAdminModule, ComponentsModule],
  exports: [OffersComponent],
  providers: [],
})
export class OffersModule {}
