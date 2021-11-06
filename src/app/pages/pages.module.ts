import { NgModule } from '@angular/core';
import { DetailModule } from './detail/detail.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [],
  imports: [
    HomeModule, 
    DetailModule,
    LoginModule
    
  ],
  exports: [
    HomeModule, 
    DetailModule,
    LoginModule
    
  ],
  providers: [],
})
export class PagesModule {}