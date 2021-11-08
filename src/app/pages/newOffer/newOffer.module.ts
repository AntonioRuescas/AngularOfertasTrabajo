import { NewOfferComponent } from './newOffer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [NewOfferComponent],
    imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule ],
    exports: [NewOfferComponent],
    providers: [],
})
export class NewOfferModule {}