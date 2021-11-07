import { OffersComponent } from './offers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OffersComponent],
  imports: [CommonModule, RouterModule],
  exports: [OffersComponent],
  providers: [],
})
export class OffersModule {}
