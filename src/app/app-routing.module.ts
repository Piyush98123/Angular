import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LeadsListingComponent } from './leads/leads-listing/leads-listing.component';
import { LoansComponent } from './loans/loans.component';
import { ResolverGuard } from './resolver.guard';

const routes: Routes = [
  {
    path: 'loans/:id',
    component: LoansComponent,
    canActivate : [AuthGuard]
  },
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  {path : 'leads',component: LeadsListingComponent,resolve : {
    data: ResolverGuard
  }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
