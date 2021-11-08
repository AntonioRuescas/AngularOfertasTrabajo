import { TableAdminModule } from './tableAdmin/tableAdmin.module';
import { TableModule } from './table/table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, TableModule, TableAdminModule, RouterModule],
  exports: [TableModule, TableAdminModule],
  providers: [],
})
export class ComponentsModule {}
