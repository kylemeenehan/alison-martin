import { Component, OnInit } from '@angular/core';

import { SiteConfigService } from '../site-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  collections;

  constructor( private site: SiteConfigService ) {
    this.collections = this.site.getCollections();
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
