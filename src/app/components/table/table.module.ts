import { NavbarComponent } from './../navbar/navbar.component';
import { TableComponent } from './table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TableComponent, NavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [TableComponent, NavbarComponent],
  providers: [],
})
export class TableModule {}
