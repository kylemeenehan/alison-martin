import { Component, OnInit } from '@angular/core';
import { Title } from '../models/title';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})
export class HeaderNavigationComponent implements OnInit {
  titles;
  constructor() { }



  ngOnInit() {
    this.titles = Title.Titles;


  }

}
