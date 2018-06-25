import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'collection/:id', component: CollectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
