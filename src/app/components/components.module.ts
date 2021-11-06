import { TableModule } from './table/table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        TableModule,
        RouterModule ],
    exports: [
        TableModule
    ],
    providers: [],
})
export class ComponentsModule {}