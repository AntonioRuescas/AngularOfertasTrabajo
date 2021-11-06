import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TableModule } from 'src/app/components/table/table.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, TableModule, RouterModule],
  exports: [HomeComponent],
  providers: [],
})
export class HomeModule {}
