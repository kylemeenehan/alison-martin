import { Component, OnInit } from '@angular/core';
import { Title } from '../models/title';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  titles = Title.Titles;

  constructor() { }

  ngOnInit() {
  }

}
