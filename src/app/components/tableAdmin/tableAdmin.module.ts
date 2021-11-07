import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableAdminComponent } from './tableAdmin.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [TableAdminComponent],
    imports: [ CommonModule, RouterModule],
    exports: [TableAdminComponent],
    providers: [],
})
export class TableAdminModule {}