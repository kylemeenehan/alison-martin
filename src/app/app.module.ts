import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { MatSidenavModule } from '@angular/material/sidenav';

import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { LandingComponent} from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { AllWorksComponent } from './allworks/allworks.component';
import { HomeSquareComponent } from './home-square/home-square.component';
import { MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    AllWorksComponent,
    LandingComponent,
    HomeComponent,
    HomeSquareComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
