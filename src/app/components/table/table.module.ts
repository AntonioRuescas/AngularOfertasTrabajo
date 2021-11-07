import { TableComponent } from './table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, RouterModule],
  exports: [TableComponent],
  providers: [],
})
export class TableModule {}
