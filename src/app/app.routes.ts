import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'products',
    loadComponent: ()=> import('./modules/products/products.component')
  },
  {
    path:'products-details/:id',
    loadComponent: ()=> import('./modules/products/details/details.component')
  },{
    path:'checkout/',
    loadComponent: ()=> import('./modules/checkout/checkout.component')
  },
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'**', redirectTo:'products', pathMatch:'full'}
];
