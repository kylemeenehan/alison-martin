import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: boolean = true;
  collections;

  constructor( private api: ApiService ) {
  }

  ngOnInit() {
    this.api.downloadAll().then(() => {
      this.collections = this.api.collections;
      this.collections.forEach(collection => {
        collection.image = this.api.getWorksByCollection(collection.id)[0].image;
      })
    });
  }

}
