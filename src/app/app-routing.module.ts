import { TableAdminComponent } from './components/tableAdmin/tableAdmin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NewOfferComponent } from './pages/newOffer/newOffer.component';
import { OffersComponent } from './pages/offers/offers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: TableComponent
      },
      {
        path: 'detail/:id',
        component: DetailComponent
      },
    ],
  },
  {
    path: 'offerAdmin',
    component: OffersComponent,
    children:[
      {
        path: '',
        component: TableAdminComponent
      },
    ]
  },
  {
    path: 'newOffer',
    component: NewOfferComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
