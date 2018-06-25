import { Component } from '@angular/core';

import { SiteConfigService } from './site-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  collections;

  constructor(private site: SiteConfigService) {
    this.collections = this.site.getCollections();
  }
}
