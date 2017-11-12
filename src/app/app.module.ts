import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Configuration }     from './configuration';
import { DataService }     from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { TransactionComponent } from './Transaction/Transaction.component'

import { SampleAssetComponent } from './SampleAsset/SampleAsset.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { VotingComponentComponent } from './voting-component/voting-component.component';
import { AddVotingComponent } from './add-voting/add-voting.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { AddPrecinctComponent } from './add-precinct/add-precinct.component';

@NgModule({
  declarations: [
    AppComponent,
		HomeComponent,
    // TransactionComponent,
    
    SampleAssetComponent,
    AdminComponentComponent,
    VotingComponentComponent,
    AddVotingComponent,
    AddCandidateComponent,
    AddPrecinctComponent
		
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Configuration,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
