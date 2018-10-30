import { Component, OnInit } from '@angular/core';
import { Title } from '../models/title';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: true;
  titles;

  constructor() { }

  ngOnInit() {
    this.titles = Title.Titles.filter(x => x.displayBlock === true);
  }

}
