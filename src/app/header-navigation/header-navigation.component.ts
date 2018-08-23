import { Component, OnInit } from '@angular/core';
import { Title } from '../models/title';
import { Location } from '@angular/common';
import { debug } from 'util';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss'],
  providers: [Location]
})
export class HeaderNavigationComponent implements OnInit {
  titles;
  showNav: number = 0;
  location: Location;
  constructor(location: Location) { this.location = location; }
    
  

  ngOnInit() {
    this.titles = Title.Titles;
    if (location.pathname !== '/home' && location.pathname !=='/landing'){
      this.showNav = 1;
    }  
     
  }

}
