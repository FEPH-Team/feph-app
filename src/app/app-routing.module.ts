import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { SampleAssetComponent } from './SampleAsset/SampleAsset.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { VotingComponentComponent } from './voting-component/voting-component.component';
import { AddVotingComponent } from './add-voting/add-voting.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { AddPrecinctComponent } from './add-precinct/add-precinct.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
    // { path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
	{ path: 'SampleAsset', component: SampleAssetComponent},
	{path: 'admin', component: AdminComponentComponent},
	{path: 'voting', component: VotingComponentComponent},
	{path: 'add_voting', component: AddVotingComponent},
	{path: 'add_candidate', component: AddCandidateComponent},
	{path: 'add_precinct', component: AddPrecinctComponent},
	{path: 'statistics', component: StatisticsComponent},
	{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
