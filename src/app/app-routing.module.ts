import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FundComponent } from './fund/fund.component';
import { FundsComponent } from './funds/funds.component';
import { EditFundsComponent } from './edit-funds/edit-funds.component';

const routes: Routes = [
  {path: "funds", component: FundsComponent},
  {path: "funds/:id", component: FundComponent},
  {path: "editFunds", component: EditFundsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
