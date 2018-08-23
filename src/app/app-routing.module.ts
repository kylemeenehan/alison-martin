import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AllWorksComponent } from './allworks/allworks.component';
import { CollectionComponent } from './collection/collection.component';
import { LandingComponent } from './landing/landing.component';
import { DirectorComponent } from './director/director.component';
import { ArtDirectorComponent } from './art-director/art-director.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'allworks', component: AllWorksComponent },
  { path: 'home', component: HomeComponent },
  { path: 'collection/:id', component: CollectionComponent },
  { path: 'directing', component: DirectorComponent },
  { path: 'art-directing', component: ArtDirectorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

