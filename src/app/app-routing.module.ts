import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { SampleAssetComponent } from './SampleAsset/SampleAsset.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { VotingComponentComponent } from './voting-component/voting-component.component';

const routes: Routes = [
    // { path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
	{ path: 'SampleAsset', component: SampleAssetComponent},
	{path: 'admin', component: AdminComponentComponent},
	{path: 'voting', component: VotingComponentComponent},

	{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
