import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material';

import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { LandingComponent} from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { AllWorksComponent } from './allworks/allworks.component';
import { HomeSquareComponent } from './home-square/home-square.component';

import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { DirectorComponent } from './director/director.component';
import { VideoComponent } from './video/video.component';
import { ArtDirectorComponent } from './art-director/art-director.component';
import { PhotographyComponent } from './photography/photography.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    AllWorksComponent,
    LandingComponent,
    HomeComponent,
    HomeSquareComponent,
    HeaderNavigationComponent,
    DirectorComponent,
    VideoComponent,
    ArtDirectorComponent,
    PhotographyComponent,
    ContactComponent,

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
