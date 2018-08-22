import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-allWorks',
  templateUrl: './allWorks.component.html',
  styleUrls: ['./allWorks.component.scss']
})
export class AllWorksComponent implements OnInit {

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
