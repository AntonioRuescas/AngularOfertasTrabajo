import { NewOfferModule } from './newOffer/newOffer.module';
import { OffersModule } from './offers/offers.module';
import { NgModule } from '@angular/core';
import { DetailModule } from './detail/detail.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [],
  imports: [HomeModule, DetailModule, LoginModule, OffersModule, NewOfferModule],
  exports: [HomeModule, DetailModule, LoginModule, OffersModule, NewOfferModule],
  providers: [],
})
export class PagesModule {}
