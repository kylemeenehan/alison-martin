import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { SiteConfigService } from '../site-config.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  @ViewChild('container') container;
  collections;
  collection;
  images;

  constructor(
    private route: ActivatedRoute,
    private site: SiteConfigService
  ) {
    this.collections = this.site.getCollections();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.container.nativeElement.scrollTop = 0;
      this.collection = this.site.getCollection(params.get('id'));
      this.images = [];
      for (let i = 1; i <= this.collection.numberOfImages; i++) {
        this.images.push(`assets/images/${this.collection.url}/${i}.jpg`);
      }
    });
  }

}
