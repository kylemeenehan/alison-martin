import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  titles = [
    { "url": "Director", "name": "Director" },
    { "url": "ArtDirector", "name": "Art Director" },
    { "url": "Art", "name": "Art" },
    { "url": "Photography", "name": "Photography" }];

  constructor() { }

  ngOnInit() {
  }

}
