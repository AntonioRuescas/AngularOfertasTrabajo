import { OffersComponent } from './offers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableAdminModule } from 'src/app/components/tableAdmin/tableAdmin.module';

@NgModule({
  declarations: [OffersComponent],
  imports: [CommonModule, RouterModule, TableAdminModule],
  exports: [OffersComponent],
  providers: [],
})
export class OffersModule {}
