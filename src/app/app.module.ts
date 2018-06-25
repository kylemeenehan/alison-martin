import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { MatSidenavModule } from '@angular/material/sidenav';

import { SiteConfigService } from './site-config.service';

import { AppComponent } from './app.component';
import { CollectionComponent } from './collection/collection.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [ SiteConfigService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
