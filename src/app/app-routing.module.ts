import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AllWorksComponent } from './allworks/allworks.component';
import { CollectionComponent } from './collection/collection.component';
import { LandingComponent } from './landing/landing.component';
import { DirectorComponent } from './director/director.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'allworks', component: AllWorksComponent },
  { path: 'home', component: HomeComponent },
  { path: 'collection/:id', component: CollectionComponent },
  { path: 'director', component: DirectorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

